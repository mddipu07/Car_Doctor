import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect"
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server"

export const GET = async (req, {params}) => {
    const p = await params;
    const bookingCollection = dbConnect(collectionNameObj.bookingCollection)
    const query = {_id: new ObjectId(p.id)}
    const singleBooking = await bookingCollection.findOne(query)

    return NextResponse.json(singleBooking)
}

export const PATCH = async (req,  {params}) => {
    const p = await params;
    const bookingCollection = dbConnect(collectionNameObj.bookingCollection)
    const query = {_id: new ObjectId(p.id)}

    const session = await getServerSession(authOptions)
    const email = session?.user?.email
    const singleBooking = await bookingCollection.findOne(query)
    const isOwnerOk = email === singleBooking?.email

   if(isOwnerOk){
     const body = await req.json()
    const filter = {
        $set: {...body}
    }
    const option = {
        upsert:true
    }
    const updateResponse = await bookingCollection.updateOne(query, filter,option)
    revalidatePath("/my-bookings")
    return NextResponse.json(updateResponse)

   }
   else{
     return NextResponse.json({message: "Forbidden Update a Action"}, {
        status:403
     })
   }


   
}
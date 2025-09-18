import { MongoClient, ServerApiVersion } from "mongodb"
const uri = process.env.NEXT_PUBLIC_MONGO_URI;

 export const collectionNameObj = {
    productsCollection:"product",
    userCollection :"test_user",
    bookingCollection: "test_booking"
}


export default function dbConnect (collectionName) {
   const client = new MongoClient(uri, {
   serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

return client.db(process.env.DB_NAME).collection(collectionName)
}
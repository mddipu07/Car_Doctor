import DeleteBookingButton from "@/app/my-bookings/Components/DeleteBookingButton";
import Image from "next/image";
import Link from "next/link";

export default function MyAllBookings({ data }) {
    console.log(data);
  return (
    <div className="overflow-x-auto">
      <table className="table w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Image</th>
            <th className="px-4 py-2 text-left">Service</th>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Phone</th>
            <th className="px-4 py-2 text-left">Present Address</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((singleData) => (
            <tr key={singleData?._id} className="border-t">
              {/* Image */}
              <td className="px-4 py-2">
                 <Image src={singleData?.service_img}
                 alt={singleData?.service_name} width={50} height={50} />
              </td>

              {/* Service Name */}
              <td className="px-4 py-2">{singleData?.service_name}</td>

              {/* Booking Date */}
              <td className="px-4 py-2">{singleData.date}</td>

              {/* Price */}
              <td className="px-4 py-2">${singleData?.service_price}</td>
              <td className="px-4 py-2">{singleData?.phoneNumber}</td>
              <td className="px-4 py-2">{singleData?.presentAddress}</td>

              {/* Action Buttons */}
              <td className="px-4 py-2 space-x-2">
               <Link href={`/my-bookings/${singleData._id}`}>
                <button className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600">
                  Edit
                </button>
               </Link>
                <DeleteBookingButton id={singleData?._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

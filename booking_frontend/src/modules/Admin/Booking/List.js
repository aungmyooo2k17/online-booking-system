import React from "react";
import {
  useGetBookingsQuery,
  useUpdateBookingMutation,
} from "../../../services/bookings";
import Table from "../../../components/Admin/TableComponent/Table";

const columns = [
  { key: "id", label: "Id" },
  { key: "customer", label: "Customer Name" },
  { key: "start_date", label: "Start Date", type: "date" },
  { key: "end_date", label: "End Date", type: "date" },
  { key: "car", label: "Car ID", type: "number" },
  { key: "status", label: "Status", type: "text" },
];

const BookingList = () => {
  const { data, refetch, error, isLoading, isSuccess, isError } = useGetBookingsQuery();
  const [updateBooking] = useUpdateBookingMutation();

  const handleEdit = (booking) => {
    console.log(`Editing booking with id ${booking}`);
    updateBooking({...booking, status: "Reserved"}).then(() => {
      console.log(`Booking with id ${booking.id} deleted successfully`);
      refetch();
    });
    
  };

  const handleDelete = (booking) => {
    console.log(`Deleting booking with id ${booking.id}`);
    // Implement delete logic here
    updateBooking({...booking, status: "Cancelled"}).then(() => {
      refetch();
    });
  };

  const handleDetails = (id) => {
    console.log(`Viewing details for booking with id ${id}`);
    // Implement details view logic here
  };

  return (
    <div className="container mx-auto mt-8">
      {isSuccess && (
        <Table
          title={"Booking List"}
          data={data}
          columns={columns}
          hideAction={false}
          pageSize={10}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default BookingList;

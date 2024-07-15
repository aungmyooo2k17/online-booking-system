import React from "react";
import { useGetBookingsQuery } from "../../../services/bookings";
import Table from "../../../components/Admin/TableComponent/Table";

const columns = [
  { key: "id", label: "Id" },
  { key: "customer_name", label: "Customer Name" },
  { key: "start_date", label: "Start Date", type: "date" },
  { key: "end_date", label: "End Date", type: "date" },
  { key: "car", label: "Car ID", type: "number" },
];

const handleEdit = (id) => {
  console.log(`Editing booking with id ${id}`);
  // Implement edit logic here
};

const handleDelete = (id) => {
  console.log(`Deleting booking with id ${id}`);
  // Implement delete logic here
};

const handleDetails = (id) => {
  console.log(`Viewing details for booking with id ${id}`);
  // Implement details view logic here
};

const BookingList = () => {
  const { data, error, isLoading, isSuccess, isError } = useGetBookingsQuery();

  return (
    <div className="container mx-auto mt-8">
      {isSuccess && (
        <Table
          title={"Booking List"}
          data={data}
          columns={columns}
          pageSize={10}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleDetails={handleDetails}
          linkToAdd={"create"}
        />
      )}
    </div>
  );
};

export default BookingList;

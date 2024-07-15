import React from "react";
import { useGetBookingsQuery } from "../../services/bookings";
import Table from "../../components/Admin/TableComponent/Table";

const columns = [
  { key: "id", label: "Id" },
  { key: "start_date", label: "Start Date", type: "date" },
  { key: "end_date", label: "End Date", type: "date" },
  { key: "car", label: "Car ID", type: "number" },
  { key: "status", label: "Status", type: "text" },
];

const MyBookingPage = () => {
  const { data, refetch, error, isLoading, isSuccess, isError } =
    useGetBookingsQuery();

  return (
    <div className="container mx-auto mt-8">
      {data && (
        <Table
          title={"My Booking List"}
          data={data}
          columns={columns}
          hideAction={true}
          pageSize={10}
        />
      )}
    </div>
  );
};

export default MyBookingPage;

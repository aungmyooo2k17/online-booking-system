import React, { useEffect } from "react";
import {
  useGetCarsQuery,
  useAddCarMutation,
  useDeleteCarMutation,
  useUpdateCarMutation,
} from "../../../../services/cars";
import Table from "../../../../components/Admin/TableComponent/Table";

const columns = [
  { key: "id", label: "Id" },
  { key: "model_name", label: "Model Name", type: "number" },
  { key: "model_year", label: "Model Year", type: "number" },
  { key: "brand", label: "Brand" },
  { key: "price", label: "Price" },
];

const handleEdit = (id) => {
  console.log(`Editing brand with id ${id}`);
  // Implement edit logic here
};

const handleDelete = (id) => {
  console.log(`Deleting brand with id ${id}`);
  // Implement delete logic here
};

const handleDetails = (id) => {
  console.log(`Viewing details for brand with id ${id}`);
  // Implement details view logic here
};

const handleAdd = () => {};

const CarList = () => {
  const { data, error, isLoading, isSuccess, isError } = useGetCarsQuery();
  const [addCar, { isLoading: addingCar }] = useAddCarMutation();
  const [updateCar, { isLoading: updatingCar }] = useUpdateCarMutation();
  const [deleteCar, { isLoading: deletingCar }] = useDeleteCarMutation();

  console.log({
    data,
    error,
    isLoading,
    isSuccess,
    isError,
  });

  return (
    <div className="container mx-auto mt-8">
      {isSuccess && (
        <Table
          title={"Car List"}
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

export default CarList;

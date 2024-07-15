import React, { useEffect } from "react";
import {
  useGetBrandsQuery,
  useAddBrandMutation,
  useDeleteBrandMutation,
  useUpdateBrandMutation,
} from "../../../../services/brands";
import Table from "../../../../components/Admin/TableComponent/Table";

const columns = [
  { key: "id", label: "Id" },
  { key: "name", label: "Name" },
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

const BrandList = () => {
  const { data, error, isLoading, isSuccess, isError } = useGetBrandsQuery();

  return (
    <div className="container mx-auto mt-8">
      {isSuccess && (
        <Table
          title={"Brand List"}
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

export default BrandList;

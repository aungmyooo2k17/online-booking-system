import React from "react";
import { useGetUsersQuery } from "../../../services/users";
import Table from "../../../components/Admin/TableComponent/Table";


const columns = [
  { key: "id", label: "Id" },
  { key: "username", label: "Username" },
  { key: "email", label: "Email" },
  { key: "dob", label: "Date of Birth", type: "date" },
  { key: "have_driving_license", label: "Do you have a driving license?" },
  { key: "first_name", label: "First Name" },
  { key: "last_name", label: "Last Name" },
];

const handleEdit = (id) => {
  console.log(`Editing user with id ${id}`);
  // Implement edit logic here
};

const handleDelete = (id) => {
  console.log(`Deleting user with id ${id}`);
  // Implement delete logic here
};

const handleDetails = (id) => {
  console.log(`Viewing details for user with id ${id}`);
  // Implement details view logic here
};

const UserList = () => {
  const { data, error, isLoading, isSuccess, isError } = useGetUsersQuery();

  return (
    <div className="container mx-auto mt-8">
      {isSuccess && (
        <Table
          title={"user List"}
          data={data}
          columns={columns}
          pageSize={10}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default UserList;

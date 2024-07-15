import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "../../../components/Common/Form";
import { useAdminLoginMutation } from "../../../services/authentication";
import { ROUTES } from "../../../constant";

const AdminLoginPage = () => {
  const [adminLogin] = useAdminLoginMutation();
  // const currentUser = useSelector((state) => state.currentUser.currentUser);
  const navigate = useNavigate();

  const initialState = {
    username: "",
    password: "",
  };
  const methods = useForm({ defaultValues: initialState });
  const { reset } = methods;

  const fields = [
    {
      label: "Username",
      type: "text",
      name: "username",
      placeholder: "Enter username",
      validation: { required: "Username is required" },
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "Enter password",
      validation: { required: "Password is required" },
    },
  ];

  const handleSubmit = (formState) => {
    adminLogin(formState).then((response) => {
      if (response.data) {
        reset();
        navigate(`/${ROUTES.admin}/${ROUTES.cars}`);
      }
    });
  };

  return (
    // page center container
    <div className="w-100 h-screen flex items-center justify-center mx-auto">
      <Form
        onSubmit={handleSubmit}
        methods={methods}
        initialState={initialState}
        submitButtonText="Login"
        FormTitle={"Admin Login"}
        fields={fields}
      />
    </div>
  );
};

export default AdminLoginPage;

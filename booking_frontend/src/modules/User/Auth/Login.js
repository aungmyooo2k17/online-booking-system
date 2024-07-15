import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../../services/authentication";
import Form from "../../../components/Common/Form";

const LoginPage = () => {
  const [login] = useLoginMutation();
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
    login(formState).then((response) => {
      if (response.data) {
        reset();
        navigate("/");
      }
    });
  };

  return (
    <div className="w-100 h-screen items-center justify-center mx-auto">
      <Form
        onSubmit={handleSubmit}
        methods={methods}
        initialState={initialState}
        submitButtonText="Login"
        fields={fields}
        FormTitle={"User Login"}
      />
      <div className="mt-4">
        <Link to="/register" className="text-blue-500 hover:text-blue-700">
          Don't have an account? Sign up
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;

import React from "react";
import { useLoginMutation } from "../../services/authentication";
import Form from "../../components/Common/Form";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
    <Form
      onSubmit={handleSubmit}
      methods={methods}
      initialState={initialState}
      submitButtonText="Login"
      fields={fields}
    />
  );
};

export default LoginPage;

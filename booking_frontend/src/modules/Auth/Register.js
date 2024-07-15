import React from "react";
import { useRegisterMutation } from "../../services/authentication";
import Form from "../../components/Common/Form";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const [register, { isLoading: registeringUser }] = useRegisterMutation();

  const initialState = {
    username: "",
    password: "",
    email: "",
    dob: null,
    have_driving_license: false,
    first_name: "",
    last_name: "",
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
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Enter email",
      validation: { required: "Email is required" },
    },
    {
      label: "Date of Birth",
      type: "date",
      name: "dob",
      placeholder: "Select date of birth",
      validation: { required: "Date of birth is required" },
    },
    {
      label: "Do you have a driving license?",
      type: "checkbox",
      name: "have_driving_license",
      validation: {}, // No validation needed for checkbox
    },
    {
      label: "First Name",
      type: "text",
      name: "first_name",
      placeholder: "Enter first name",
      validation: { required: "First name is required" },
    },
    {
      label: "Last Name",
      type: "text",
      name: "last_name",
      placeholder: "Enter last name",
      validation: { required: "Last name is required" },
    },
  ];

  const handleSubmit = (formState) => {
    register(formState);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      methods={methods}
      initialState={initialState}
      submitButtonText="Register"
      fields={fields}
    />
  );
};

export default RegisterPage;

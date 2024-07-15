import React from "react";
import Form from "../../../../components/Common/Form";
import { useAddBrandMutation } from "../../../../services/brands";
import { useForm } from "react-hook-form";

const BrandCreate = () => {
  const initialState = {
    name: "",
  };
  const methods = useForm({ defaultValues: initialState });
  const { reset } = methods;
  const [addBrand, { isLoading: addingBrand }] = useAddBrandMutation();

  const fields = [
    {
      label: "Name",
      type: "text",
      name: "name",
      placeholder: "Enter brand name",
      validation: { required: "brand name is required" },
    },
  ];

  const handleSubmit = (formState) => {
    addBrand(formState);
    reset();
  };

  return (
    <Form
      onSubmit={handleSubmit}
      initialState={initialState}
      methods={methods}
      submitButtonText="Save"
      fields={fields}
    />
  );
};

export default BrandCreate;

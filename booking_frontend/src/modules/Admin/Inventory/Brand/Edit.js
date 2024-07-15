import React from "react";
import Form from "../../../../components/Common/Form";


const BrandEdit = () => {
  const initialState = {
    model_name: "",
    model_year: "",
    brand_id: "",
    type: "",
    no_of_seater: "",
    engine_litre: "",
    price: "",
  };

  const fields = [
    {
      label: "Model Name",
      type: "text",
      name: "model_name",
      placeholder: "Enter model name",
      validation: { required: "Model name is required" },
    },
    {
      label: "Model Year",
      type: "number",
      name: "model_year",
      placeholder: "Enter model year",
      validation: { required: "Model year is required" },
    },
    {
      label: "Brand",
      type: "select",
      name: "brand_id",
      options: [
        { label: "Select a brand", value: "" },
        { label: "Brand 1", value: "1" },
        { label: "Brand 2", value: "2" },
      ],
      validation: { required: "Brand is required" },
    },
    {
      label: "Type",
      type: "select",
      name: "type",
      options: [
        { label: "Select type", value: "" },
        { label: "Petrol", value: "petrol" },
        { label: "Hybrid", value: "hybrid" },
        { label: "Electric", value: "electric" },
      ],
      validation: { required: "Type is required" },
    },
    {
      label: "Number of Seats",
      type: "number",
      name: "no_of_seater",
      placeholder: "Enter the number of seats",
      validation: { required: "Number of seats is required" },
    },
    {
      label: "Engine (Litre)",
      type: "number",
      name: "engine_litre",
      placeholder: "Enter the engine capacity",
      step: "0.1",
      validation: { required: "Engine capacity is required" },
    },
    {
      label: "Price",
      type: "number",
      name: "price",
      placeholder: "Enter the price",
      validation: { required: "Price is required" },
    },
  ];

  const handleSubmit = (formState) => {
    // Add your form submission logic here
    console.log(formState);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      initialState={initialState}
      submitButtonText="Save Changes"
      fields={fields}
    />
  );
};

export default BrandEdit;

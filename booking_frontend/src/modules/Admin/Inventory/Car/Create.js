import React from "react";
import Form from "../../../../components/Common/Form";
import { useAddCarMutation } from "../../../../services/cars";
import { useForm } from "react-hook-form";

const CarCreate = () => {
  const [addCar, { isLoading: addingCar }] = useAddCarMutation();

  const initialState = {
    model_name: "",
    model_year: "",
    brand: "",
    type: "",
    no_of_seater: "",
    engine_litre: "",
    price: "",
    image: null,
  };

  const methods = useForm({ defaultValues: initialState });
  const { reset } = methods;

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
      name: "brand",
      options: [
        { label: "Select a brand", value: "" },
        { label: "Brand 1", value: 1 },
        { label: "Brand 2", value: 2 },
        { label: "Brand 2", value: 3 },
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
    {
      label: "Image",
      type: "file",
      name: "image",
      validation: { required: "Image is required" },
    }
  ];

  const handleSubmit = (formState) => {
    console.log(formState);
    formState.image = formState.image[0];
    console.log(formState);
    addCar(formState);
    reset();
  };

  return (
    <Form
      onSubmit={handleSubmit}
      methods={methods}
      initialState={initialState}
      submitButtonText="Save"
      fields={fields}
    />
  );
};

export default CarCreate;

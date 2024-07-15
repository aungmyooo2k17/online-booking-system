import React from "react";
import { useForm } from "react-hook-form";
import Form from "../Common/Form";

const FilterForm = ({ handleFilterSubmit }) => {
  const methods = useForm();

  const { handleSubmit, reset } = methods;

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1990 + 1 },
    (_, index) => currentYear - index
  );

  const fields = [
    {
      label: "Price Range",
      name: "price",
      type: "range",
      min: 100,
      max: 10000,
      step: 50,
    },
    {
      label: "Vehicle Type",
      type: "select",
      name: "type",
      options: [
        { label: "Select type", value: "" },
        { label: "Petrol", value: "petrol" },
        { label: "Hybrid", value: "hybrid" },
        { label: "Electric", value: "electric" },
      ],
    },
    {
      label: "Number of Seaters",
      type: "select",
      name: "no_of_seater",
      options: [
        { label: "Select number of seats", value: "" },
        { label: "2", value: "2" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
        { label: "7", value: "7" },
      ],
    },
    {
      label: "Engine Horsepower",
      type: "number",
      step: "0.1",
      name: "engine_litre",
      placeholder: "Enter horsepower",
    },
    {
      label: "Select Year",
      type: "select",
      name: "model_year",
      options: [
        { label: "Select year", value: "" },
        ...years.map((year) => ({ label: `${year}`, value: `${year}` })),
      ],
    },
  ];

  const onSubmit = (formData) => {
    handleFilterSubmit(formData);
  };

  return (
    <div className="lg:w-2/4 ">
      <Form
        onSubmit={handleSubmit(onSubmit)}
        methods={methods}
        submitButtonText="Filter"
        FormTitle={"Car Filter"}
        fields={fields}
      />
    </div>
  );
};

export default FilterForm;

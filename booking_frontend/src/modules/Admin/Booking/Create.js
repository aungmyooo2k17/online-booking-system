import React from "react";
import { useForm } from "react-hook-form";
import { useAddBookingMutation } from "../../../services/bookings";
import { useGetCarsQuery } from "../../../services/cars";
import Form from "../../../components/Common/Form";

const BookingCreate = () => {
  const [addBooking, { isLoading: addingBooking }] = useAddBookingMutation();
  const { data, error, isLoading, isSuccess, isError } = useGetCarsQuery();

  const initialState = {
    customer_name: "",
    start_date: null,
    end_date: null,
    car: "",
  };

  const methods = useForm({ defaultValues: initialState });
  const { reset } = methods;

  const carOptions = data?.map((car) => ({
    label: car.model_name,
    value: car.id,
  })) || [];


  const fields = [
    {
      label: "Customer Name",
      type: "text",
      name: "customer_name",
      placeholder: "Enter name",
      validation: { required: "Customer name is required" },
    },
    {
      label: "Start Date",
      type: "date",
      name: "start_date",
      placeholder: "Select start date",
      validation: { required: "Start date is required" },
    },
    {
      label: "End Date",
      type: "date",
      name: "end_date",
      placeholder: "Select end date",
      validation: { required: "End date is required" },
    },
    {
      label: "Select Car",
      type: "select",
      name: "car",
      options: [{ label: "Select a brand", value: "" }, ...carOptions],
      validation: { required: "Car is required" },
    },
  ];

  const handleSubmit = (formState) => {
    addBooking(formState);
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

export default BookingCreate;

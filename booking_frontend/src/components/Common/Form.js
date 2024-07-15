import React from "react";
import { FormProvider, useFormContext } from "react-hook-form";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";

const Form = ({ onSubmit, methods, submitButtonText, fields }) => {
  return (
    <FormProvider {...methods}>
      <form
        encType="multipart/form-data"
        onSubmit={methods.handleSubmit(onSubmit)}
        className="container mx-auto p-6 mt-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
      >
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">Form</h3>
        </div>
        <div className="p-6.5">
          {fields.map((field) => {
            if (field.type === "select") {
              return (
                <Select key={field.name} {...field} />
              );
            }
            return (
              <Input {...field} key={field.name} />
            );
          })}
          <Button text={submitButtonText} />
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;

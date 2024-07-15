import React from 'react';
import { useFormContext } from 'react-hook-form';

const Input = ({ label, type, name, placeholder, validation }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="mb-4.5">
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        {label}
      </label>
      <input
        type={type}
        {...register(name, validation)}
        placeholder={placeholder}
        className={`w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${errors[name] ? 'border-red-500' : ''}`}
      />
      {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>}
    </div>
  );
};

export default Input;

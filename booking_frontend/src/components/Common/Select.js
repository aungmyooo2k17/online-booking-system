import React from 'react';
import { useFormContext } from 'react-hook-form';

const Select = ({ label, name, options, validation }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="mb-4.5">
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        {label}
      </label>
      <select
        {...register(name, validation)}
        className={`relative z-20 w-full appearance-none rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${errors[name] ? 'border-red-500' : ''}`}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>}
    </div>
  );
};

export default Select;

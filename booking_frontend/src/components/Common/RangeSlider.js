import React from 'react';
import { useFormContext } from 'react-hook-form';

const RangeSlider = ({ label, name, min, max, step, ...rest }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="relative mb-6">
      <label className="sr-only">{label}</label>
      <input
        {...rest}
        type="range"
        id={name}
        {...register(name)}
        min={min}
        max={max}
        step={step}
        className="w-full h-2 rounded-lg cursor-pointer dark:bg-gray-700"
      />
      <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">{`${min}`}</span>
      <span className="text-sm absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">{`${Math.round(min + ((max - min) / 3))}`}</span>
      <span className="text-sm absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">{`${Math.round(min + (max - min) * 2 / 3)}`}</span>
      <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">{`${max}`}</span>
    </div>
  );
};

export default RangeSlider;

import React from 'react';

const Button = ({ text }) => (
  <button
    type="submit"
    className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
  >
    {text}
  </button>
);

export default Button;

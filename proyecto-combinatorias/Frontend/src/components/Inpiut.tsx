import React, { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  customClassName?: string;
};

export function Input({ customClassName = "", ...props }: InputProps) {
  const defaultClassName = "bg-gray-700 border border-purple-500 text-white placeholder-gray-400 rounded-md px-4 py-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 hover:bg-gray-600";

  return (
    <input 
      {...props} 
      className={`${defaultClassName} ${customClassName}`} 
    />
  );
}

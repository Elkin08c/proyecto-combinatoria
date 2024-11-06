import React, { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  customClassName?: string;
  icon?: React.ReactNode;
};

export function Input({ customClassName = "", icon, ...props }: InputProps) {
  const baseStyles = "bg-gray-800 text-white placeholder-gray-400 rounded-lg px-4 py-2 transition duration-200 ease-in-out";
  const focusStyles = "focus:outline-none focus:ring-2 focus:ring-purple-500";
  const hoverStyles = "hover:bg-gray-700";
  const combinedClassName = `${baseStyles} ${focusStyles} ${hoverStyles} ${customClassName}`;

  return (
    <div className="relative w-full max-w-sm">
      {icon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500">
          {icon}
        </div>
      )}
      <input 
        {...props} 
        className={`${combinedClassName} ${icon ? "pl-10" : ""}`} 
        style={{ paddingLeft: icon ? "2.5rem" : undefined }}
      />
    </div>
  );
}

import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  const baseStyles = "relative inline-block font-semibold text-lg text-purple-300 transition-colors duration-200 ease-in-out";
  const hoverStyles = "hover:text-purple-400 focus-within:text-purple-400";

  return (
    <label 
      {...props} 
      className={`${baseStyles} ${hoverStyles} ${props.className || ""}`}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 opacity-0 transition-opacity duration-300 ease-in-out rounded-lg -z-10 hover:opacity-100 blur-md"></span>
      <span className="relative z-10 px-2 py-1">{children}</span>
      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400 rounded-full transition-transform duration-300 transform scale-x-0 hover:scale-x-100"></span>
    </label>
  );
};

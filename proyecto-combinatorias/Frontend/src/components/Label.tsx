import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ children, ...props }) => (
  <label 
    {...props} 
    className={`text-purple-300 font-medium transition-colors duration-200 ${props.className || ""} hover:text-purple-400 focus-within:text-purple-400`}
  >
    {children}
  </label>
);

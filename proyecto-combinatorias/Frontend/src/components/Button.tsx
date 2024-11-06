import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  ...props 
}) => {
  const baseClasses = "font-semibold rounded-lg shadow-md focus:outline-none transition-transform duration-200 ease-in-out transform";

  const variantClasses = {
    primary: "bg-purple-600 text-white hover:bg-purple-700",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const sizeClasses = {
    small: "py-1 px-3 text-sm",
    medium: "py-2 px-4 text-base",
    large: "py-3 px-6 text-lg",
  };

  const interactionClasses = "hover:scale-105 active:scale-95 focus:ring-2 focus:ring-offset-2";

  return (
    <button
      {...props}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${interactionClasses} focus:ring-${variant === 'danger' ? 'red' : 'purple'}-500`}
    >
      {children}
    </button>
  );
};

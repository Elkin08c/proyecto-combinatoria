import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => (
  <div className="w-full max-w-md bg-gradient-to-br from-gray-800 to-gray-900 text-white border border-gray-700 rounded-xl p-8 shadow-2xl transition-all duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-1">
    <div className="p-4 border border-gray-600 rounded-lg">
      {children}
    </div>
  </div>
);

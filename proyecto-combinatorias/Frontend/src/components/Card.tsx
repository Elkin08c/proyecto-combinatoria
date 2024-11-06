import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => (
  <div className="w-full max-w-md bg-gradient-to-br from-gray-800 to-gray-900 text-white border border-gray-700 rounded-xl p-6 shadow-xl transition-transform duration-300 ease-in-out transform hover:shadow-2xl hover:-translate-y-2">
    <div className="relative p-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg shadow-md border border-gray-600">
      
      {/* Bordes decorativos superiores */}
      <div className="absolute -top-4 -right-4 h-6 w-6 bg-indigo-500 rounded-full border-4 border-gray-900 shadow-sm" />
      <div className="absolute -top-4 -left-4 h-6 w-6 bg-purple-500 rounded-full border-4 border-gray-900 shadow-sm" />
      
      {/* Contenido principal de la tarjeta */}
      <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 shadow-lg">
        {children}
      </div>
    </div>
  </div>
);

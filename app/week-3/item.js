import React from 'react';

// Define the Item component
const Item = ({ name, quantity, category }) => {
  return (
    <li className="flex items-center justify-between p-4 border-b border-gray-200">
      <div>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
      <span className="text-sm font-medium text-gray-800">{quantity}</span>
    </li>
  );
};

export default Item;

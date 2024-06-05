import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;

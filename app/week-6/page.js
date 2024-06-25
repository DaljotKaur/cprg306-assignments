"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

const Page = () => {
  const [items, setItems] = useState(itemsData);

  const handleAddItems = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="bg-gray-900 py-4">
      <h1 className="text-4xl font-bold text-gray-200 p-4">Shopping List</h1>
      <h2 className="text-2xl font-bold text-lime-500 px-4">Add New Item</h2>
      <NewItem addItem={handleAddItems} />
      <ItemList items={items} />
    </main>
  );
};

export default Page;
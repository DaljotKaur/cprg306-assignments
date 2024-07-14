
"use client";

import ItemList from "./item-list";

import NewItem from "./new-item";

import itemsData from "./items.json";

import MealIdeas from "./meal-ideas";

import { useState } from "react";

const Page = () => {
  const [items, setItems] = useState(itemsData);

  const [selectedItem, setSelectedItem] = useState("");

  const handleAddItems = (newItem) => {
    setItems([...items, newItem]);
  };

  const handelItemSelect = (itemName) => {
    // If the string contains a comma, extract text before the comma

    if (itemName.includes(",")) {
      return setSelectedItem(itemName.split(",")[0].trim());
    } else {
      // If the string doesn't contain a comma, remove emojis

      return setSelectedItem(itemName.replace(/[\p{Emoji}]/gu, "").trim());
    }
  };

  return (
    <main className="bg-gray-900 p-4 flex flex-row gap-4">
      <div className="w-full">
        <h1 className="text-4xl font-bold text-gray-200 p-4">Shopping List</h1>

        <h2 className="text-2xl font-bold text-lime-500 px-4">Add New Item</h2>

        <NewItem addItem={handleAddItems} />

        <ItemList items={items} onItemSelect={handelItemSelect} />
      </div>

      <div className="bg-gray-400 w-full my-4 mr-4 rounded-xl">
        <MealIdeas ingredient={selectedItem} />
      </div>
    </main>
  );
};

export default Page;

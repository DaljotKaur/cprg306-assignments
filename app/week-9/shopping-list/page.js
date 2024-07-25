///"use client"; // Ensure this file runs on the client side

import React, { useEffect, useState } from "react";
import { getItems, addItem } from "../_services/shopping-list-service"; // Import functions from shopping-list-service.js

import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

// Dummy user object for demonstration, replace with actual user context or authentication
const user = {
  uid: "current-user-id", // Replace with the actual user ID from your authentication setup
};

const Page = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [newItem, setNewItem] = useState("");

  // Function to load items from Firestore
  const loadItems = async () => {
    try {
      if (user.uid) {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      }
    } catch (error) {
      console.error("Error fetching items: ", error);
    }
  };

  // useEffect hook to load items when the component mounts
  useEffect(() => {
    loadItems();
  }, []); // Empty dependency array means this effect runs once on mount

  // Handle adding a new item
  const handleAddItem = async () => {
    if (newItem.trim() === "") return; // Prevent adding empty items

    try {
      if (user.uid) {
        const newItemId = await addItem(user.uid, { name: newItem });
        setItems((prevItems) => [...prevItems, { id: newItemId, name: newItem }]);
        setNewItem(""); // Clear input field
      }
    } catch (error) {
      console.error("Error adding item: ", error);
    }
  };

  const handleItemSelect = (itemName) => {
    if (itemName.includes(",")) {
      setSelectedItem(itemName.split(",")[0].trim());
    } else {
      setSelectedItem(itemName.replace(/[\p{Emoji}]/gu, "").trim());
    }
  };

  return (
    <main className="bg-gray-900 p-4 flex flex-row gap-4">
      <div className="w-full">
        <h1 className="text-4xl font-bold text-gray-200 p-4">Shopping List</h1>

        <h2 className="text-2xl font-bold text-lime-500 px-4">Add New Item</h2>

        <NewItem
          newItem={newItem}
          setNewItem={setNewItem}
          addItem={handleAddItem}
        />

        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      <div className="bg-gray-400 w-full my-4 mr-4 rounded-xl">
        <MealIdeas ingredient={selectedItem} />
      </div>
    </main>
  );
};

export default Page;

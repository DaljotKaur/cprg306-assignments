"use client";

import { useState } from "react";

const NewItem = ({ addItem }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };
    addItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      className="flex flex-row gap-4 mx-4 my-2 bg-gray-900 rounded-xl items-center"
      onSubmit={handleSubmit}
    >
      <input
        className="border-2 border-lime-500 bg-white rounded-lg text-gray-900 px-1.5 py-1 hover:bg-lime-100 hover:border-lime-800 focus:bg-lime-100"
        placeholder="Enter item name"
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="border-2 border-lime-500 bg-white rounded-lg text-gray-900 px-1.5 py-1 hover:bg-lime-100 hover:border-lime-800 focus:bg-lime-100"
        placeholder="Enter quantity"
        name="quantity"
        type="number"
        min="1"
        max="99"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        required
      />
      <select
        name="selectCategory"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border-2 border-lime-500 bg-white rounded-lg text-gray-900 px-1.5 py-1 hover:bg-lime-100 hover:border-lime-800 focus:bg-lime-100"
      >
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Meat">Meat</option>
        <option value="Frozen Foods">Frozen Foods</option>
        <option value="Canned Goods">Canned Goods</option>
        <option value="Dry Goods">Dry Goods</option>
        <option value="Beverages">Beverages</option>
        <option value="Snacks">Snacks</option>
        <option value="Household">Household</option>
        <option value="Other">Other</option>
      </select>
      <button
        type="submit"
        className="text-gray-900 font-bold px-4 py-2 bg-lime-500 w-24 rounded-full hover:bg-lime-700"
      >
        Add
      </button>
    </form>
  );
};

export default NewItem;
"use client";
import React, { useState } from "react";

const NewItem = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = [name, quantity, category];
    alert(`Added item: ${name}, quantity:  ${quantity}, category: ${category}`);
    console.log(item);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };
  return (
    <div className="flex justify-center items-start h-screen">
      <form onSubmit={handleSubmit} className="bg-blue-900 p-4 m-2 w-96">
        <div>
          <input
            type="text"
            value={name}
            placeholder="item name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
            className="text-black rounded-lg mb-2 text-l w-full h-9 placeholder:p-2"
          />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <input
              type="number"
              min={1}
              max={99}
              value={quantity}
              onChange={(e) => {
                setQuantity(Number(e.target.value));
              }}
              required
              className="text-black  rounded-lg p-2 h-9"
            />
          </div>
          <div>
            <select
              id="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="text-black rounded-lg p-2 h-9"
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen-foods">Frozen Foods</option>
              <option value="canned-goods">Canned Goods</option>
              <option value="dry-goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-300 w-full mt-2 h-9 rounded-lg"
        >
          +
        </button>
      </form>
    </div>
  );
};

export default NewItem;
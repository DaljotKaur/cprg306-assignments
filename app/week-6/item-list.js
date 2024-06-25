"use client";
import Item from "./item";
import { useState } from "react";
// let items = require("./items.json")

const ItemList = ({ items }) => {
  const [sortBy, setSortBy] = useState("name");

  const sortedList = [...items].sort((a, b) => {
    if (sortBy === "name") {
      if (a.name < b.name) return -1;
      else if (a.name > b.name) return 1;
      else return 0;
    } else if (sortBy === "category") {
      if (a.category < b.category) return -1;
      else if (a.category > b.category) return 1;
      else return 0;
    }
  });

  return (
    <div>
      <div className="flex flex-row items-center bg-gray-600 mx-4 rounded-xl py-1">
        <div className="p-4 font-bold">Sort by:</div>
        {sortBy === "name" ? (
          <button
            className="text-gray-900 font-bold px-4 py-2 m-1 bg-lime-500 rounded-full drop-shadow-2xl"
            value="name"
          >
            Name
          </button>
        ) : (
          <button
            className="text-gray-900 font-bold px-4 py-2 m-1 bg-lime-700 rounded-full hover:bg-lime-600"
            onClick={(e) => setSortBy(e.target.value)}
            value="name"
          >
            Name
          </button>
        )}
        {sortBy === "category" ? (
          <button
            className="text-gray-900 font-bold px-4 py-2 m-1 bg-lime-500 rounded-full drop-shadow-2xl"
            value="category"
          >
            Category
          </button>
        ) : (
          <button
            className="text-gray-900 font-bold px-4 py-2 m-1 bg-lime-700 rounded-full hover:bg-lime-600"
            onClick={(e) => setSortBy(e.target.value)}
            value="category"
          >
            Category
          </button>
        )}
      </div>
      <div>
        <ul>
          {sortedList.map((item) => {
            return (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ItemList;

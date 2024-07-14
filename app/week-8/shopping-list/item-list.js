"use client";
import Item from "./item";
import { useState } from "react";
// let items = require("./items.json")

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState("name");
  const [categorize, setCategorize] = useState(false);

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

  const groupedItems = sortedList.reduce((acc, currentItem) => {
    const { category } = currentItem;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(currentItem);
    return acc;
  }, {});

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
            onClick={(e) => {
              setSortBy(e.target.value);
              setCategorize(false);
            }}
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
            onClick={(e) => {
              setSortBy(e.target.value);
              setCategorize(false);
            }}
            value="category"
          >
            Category
          </button>
        )}
        {sortBy === "categorize" ? (
          <button
            className="text-gray-900 font-bold px-4 py-2 m-1 bg-lime-500 rounded-full drop-shadow-2xl"
            value="categorize"
          >
            Categorized List
          </button>
        ) : (
          <button
            className="text-gray-900 font-bold px-4 py-2 m-1 bg-lime-700 rounded-full hover:bg-lime-600"
            onClick={(e) => {
              setCategorize(true);
              setSortBy(e.target.value);
            }}
            value="categorize"
          >
            Categorized List
          </button>
        )}
      </div>
      <div>
        <ul>
          {!categorize
            ? sortedList.map((item) => {
                return (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                    onSelect={onItemSelect}
                  />
                );
              })
            : Object.entries(groupedItems).map((groupedItem) => {
                return (
                  <li
                    key={groupedItem[1][0].id}
                    className="m-4 px-2 py-4 list-none bg-gray-400 border text-gray-900 w-100 rounded-xl"
                  >
                    <h1 className="capitalize text-3xl font-bold p-2 mx-2 bg-gray-900 text-lime-500 rounded-xl drop-shadow-xl">
                      {groupedItem[0]}
                    </h1>
                    {groupedItem[1].map((item) => {
                      return (
                        <div key={item.id} className="px-4 my-4">
                          <div className="border-b-2 border-gray-700">
                            <h3 className="capitalize text-2xl font-bold">
                              {item.name}
                            </h3>
                            <p className="mt-[0.5rem]">{`Buy ${item.quantity} in ${item.category} aisle`}</p>
                          </div>
                        </div>
                      );
                    })}
                  </li>
                );
              })}
        </ul>
      </div>
    </div>
  );
};

export default ItemList;
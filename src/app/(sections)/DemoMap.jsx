"use client";

import { useState } from "react";

const ITEMS = [
  {
    id: 1,
    title: "Item 1",
    description: "Description 1",
    image: "/images/item1.jpg",
  },
  {
    id: 2,
    title: "Item 2",
    description: "Description 2",
    image: "/images/item2.jpg",
  },
  {
    id: 3,
    title: "Item 3",
    description: "Description 3",
    image: "/images/item3.jpg",
  },
];

const DemoMap = () => {
  const [cart, setCart] = useState([]);
  return (
    <div className="flex flex-col gap-4">
      {ITEMS.map((item, index) => (
        <button key={index} onClick={() => console.log(item)}>
          {item.title}
        </button>
      ))}
      <div>test</div>
    </div>
  );
};

export default DemoMap;

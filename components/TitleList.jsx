"use client";

import { useEffect, useRef } from "react";

export default function TitleList({ titles, currentIndex, setCurrentIndex }) {
  const listRef = useRef(null);

  // Scroll tracking: Automatically update the active item as the user scrolls
  const handleScroll = () => {
    if (listRef.current) {
      const items = Array.from(listRef.current.children);
      const containerRect = listRef.current.getBoundingClientRect();

      items.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();

        // If the item's top is aligned with the container's top, it becomes active
        if (itemRect.top >= containerRect.top && itemRect.top <= containerRect.top + 5) {
          setCurrentIndex(index);
        }
      });
    }
  };

  // Scroll the list to the active item on initial load
  useEffect(() => {
    if (listRef.current) {
      const currentItem = listRef.current.children[currentIndex];
      if (currentItem) {
        currentItem.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [currentIndex]);

  return (
    <div
      className="w-auto p-10 h-screen overflow-y-auto overflow-x-hidden" // Ensures vertical scroll
      ref={listRef}
      onScroll={handleScroll}
      style={{ height: "100vh", overflowY: "auto" }} // Ensures scroll works
    >
      {titles.map((title, index) => (
        <div
          key={index}
          onClick={() => setCurrentIndex(index)} // On title click, update the current card
          className={`p-4 mb-2 text-7xl font-semibold transition-opacity duration-300 cursor-pointer ${
            index === currentIndex ? "text-blue-600" : "text-gray-700"
          }`}
        >
          {title}
        </div>
      ))}
      <div style={{ height: "90%" }}>
      </div>
    </div>
  );
}

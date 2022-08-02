import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("All");

  let newItems = [];
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchCategory(event) {
    setSearch(event.target.value);
  }

  const handleNewSubmittedItem = (newSumittedItem) => {
    newItems = [...items, newSumittedItem];
    setItems(newItems);
    console.log(newItems);
  };

  const itemsToDisplay = items
    .filter((item) => {
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    })

    .filter((item) => {
      if (search === "All") {
        return true;
      } else if (
        item.category.toLowerCase().includes(search.toLocaleLowerCase())
      ) {
        return item;
      }
      return item.category === search;
    });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleNewSubmittedItem} />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchCategory}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

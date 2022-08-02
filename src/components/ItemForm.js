import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [newItem, setNewItem] = useState ({
    id : uuid(),
    name : " ",
    category : "Produce"
  });

  const handleChange = (event) => {

    const name = event.target.name;
    let value = event.target.value;
     setNewItem({
       ...newItem,
       [name] : value
     })
  }

  const handleNewItemSubmit = (event) => {
     event.preventDefault();
     props.onItemFormSubmit(newItem)
     setNewItem({
      id : uuid(),
      name : " ",
      category : "Produce"
    })
  }
  
  return (
    <form className="NewItem" onSubmit={handleNewItemSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} value = {newItem.name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange} value = {newItem.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

import { useState } from "react";

function ShopingList() {
  const [name, setName] = useState([]);
  const [items, setItems] = useState([]);

  const createList = (e) => {
    e.preventDefault();
    if (name == "") alert("Please Enter a Name");
    else {
      const newItems = { name };
      setItems((i) => [...i, newItems]);
      if (e.target.value === "reset") {
        setItems([]);
        setName([]);
      }
    }
  };

  return (
    <>
      <form onSubmit={createList}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Ieam</button>
      </form>
      <button value="reset" onClick={createList}>
        Reset
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index}> Name:{item.name}</li>
        ))}
      </ul>
    </>
  );
}
export default ShopingList;

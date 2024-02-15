/* eslint react/prop-types: off */
import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats"

// Derived States
// if some of the values can be calculated from the state, calculate from the states.
// do not use new states unnecessarily

export default function App() {
  const [items, setItems] = useState([]);
  function handleItems(item) {
    setItems((current) => [...current, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((element) => element.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((element) =>
        // spread the object and reverse the packed boolean
        element.id === id ? { ...element, packed: !element.packed } : element
      )
    );
  }
  function handleInitialState() {
    // asking for confirmation window
    const confirmed = window.confirm(
      "Are you sure you want to delete all items ? "
    );
    confirmed && setItems([]);
  }
  console.log(items);
  return (
    <div className="app">
      <Logo />
      <Form onItems={handleItems} />
      <PackingList
        itemsProps={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onInitialState={handleInitialState}
      />
      <Stats itemsProps={items} />
    </div>
  );
}


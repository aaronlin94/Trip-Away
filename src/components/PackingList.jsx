import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  itemsProps,
  onDeleteItem,
  onToggleItem,
  onInitialState,
}) {
  const [sortBy, setSortBy] = useState("input");
  // to sort items, use let
  // setting input as default and rendering the sort by input which is the same as initial items state
  let sortedItems;
  if (sortBy === "input") sortedItems = itemsProps;
  // sorting algorithm that sorts alphabetically
  if (sortBy === "description")
    sortedItems = itemsProps
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "quantity")
    sortedItems = itemsProps.slice().sort((a, b) => a.quantity - b.quantity);
  // sorting algorithm that sorts by boolean value
  if (sortBy === "packed")
    sortedItems = itemsProps
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((element) => (
          <Item
            itemsProps={element}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={element.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by Description</option>
          <option value="quantity">Sort by Quantity</option>
          <option value="packed">Sort by Packed Items</option>
        </select>
        <button onClick={onInitialState}>Clear List</button>
      </div>
    </div>
  );
}

import { useState } from "react";

export default function Form({ onItems }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!description) {
      alert("No item to add");
      setQuantity(1);
      setDescription("");
      return;
    }
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onItems(newItem);
    setQuantity(1);
    setDescription("");
  }

  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
      >
        {Array.from(
          { length: 20 },
          (element, index) => (element = index + 1)
        ).map((element) => (
          <option value={element} key={element}>
            {element}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        // press Enter and submit logic
        onKeyDown={(event) => event.key === "Enter" && handleSubmit(event)}
      ></input>
      <button onClick={(event) => handleSubmit(event)}>Add</button>
    </div>
  );
}

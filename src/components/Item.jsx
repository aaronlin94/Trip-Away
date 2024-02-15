export default function Item({ itemsProps, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={itemsProps.packed}
        onChange={() => {
          onToggleItem(itemsProps.id);
        }}
      ></input>
      <span style={itemsProps.packed ? { textDecoration: "line-through" } : {}}>
        {itemsProps.quantity} {itemsProps.description}
      </span>
      <button onClick={() => onDeleteItem(itemsProps.id)}>❌</button>
    </li>
  );
}

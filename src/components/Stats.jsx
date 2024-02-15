export default function Stats({ itemsProps }) {
  // early return
  if (!itemsProps.length) {
    return (
      <footer className="stats">
        <em>
          It is time to go on a trip. Add items to remind you to pack important
          and necessary items. 📕💼
        </em>
      </footer>
    );
  }
  const numItems = itemsProps.length;
  const numPacked = itemsProps.filter((element) => element.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100) || 0;
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "🌴🌴 You have packed everything you need. Have a fun trip 🛬🛫"
          : `You have ${numItems} items on your list, and you have packed ${numPacked}
          (${percentage}%) items.`}
      </em>
    </footer>
  );
}

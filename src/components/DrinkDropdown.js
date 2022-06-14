
export default function DrinkDropdown({ setDrinkId }) {
  return (
    <div>
      <select onChange={({ target: { value } }) => setDrinkId(value)} >
        <option value="1">Coke</option>
        <option value="2">Orange Soda</option>
        <option value="3">Sprite</option>
      </select>
    </div>
  );
}

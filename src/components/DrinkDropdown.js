
export default function DrinkDropdown({ setDrinkId }) {
  return (
    <div>
      <label> Choose a Drink
        <select onChange={({ target: { value } }) => setDrinkId(value)}> 
          <option value="2">Coke</option>
          <option value="3">Orange Soda</option>
          <option value="1">Sprite</option>
        </select>

      </label>
    </div>
  );
}


export default function FoodDropdown({ setFoodId }) {
  return (
    <div>
      <label>
        Choose a Burger
        <select onChange={({ target: { value } }) => setFoodId(value)} >
          <option value="1">Hamburger</option>
          <option value="2">Cheeseburger</option>
          <option value="3">Double Cheeseburger</option>
        </select>
      </label>
    </div>
  );
}

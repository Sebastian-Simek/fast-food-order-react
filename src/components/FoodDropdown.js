
export default function FoodDropdown({ setFoodId }) {
  return (
    <div>
      <select onChange={({ target: { value } }) => setFoodId(value)} >
        <option value="1">Hamburger</option>
        <option value="2">Cheeseburger</option>
        <option value="3">Double Cheeseburger</option>
      </select>
    </div>
  );
}

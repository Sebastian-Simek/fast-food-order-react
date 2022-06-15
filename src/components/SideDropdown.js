
export default function SideDropdown({ setSideId }) {
  return (
    <div>
      <label> Choose a Side
        <select onChange={({ target: { value } }) => setSideId(value)} >
          <option value="1">Fries</option>
          <option value="2">Chips</option>
          <option value="3">Chimichangas</option>
        </select>

      </label>
    </div>

  );
}

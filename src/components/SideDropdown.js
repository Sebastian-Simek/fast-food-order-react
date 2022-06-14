
export default function SideDropdown({ setSideId }) {
  return (
    <div>
      <select onChange={({ target: { value } }) => setSideId(value)} >
        <option value="1">Fries</option>
        <option value="2">Chips</option>
        <option value="3">Chimichangas</option>
      </select>
    </div>

  );
}

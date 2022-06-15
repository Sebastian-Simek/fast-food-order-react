
export default function OrderName({ setOrderName }) {
  return (
    <div className="display-name">
        What is Your Name?
      <input onChange={({ target: { value } }) => setOrderName(value)} />
    </div>
  );
}

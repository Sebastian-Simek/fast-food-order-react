
export default function OrderName({ setOrderName }) {
  return (
    <div>
        What is Your Name?
      <input onChange={({ target: { value } }) => setOrderName(value)} />
    </div>
  );
}

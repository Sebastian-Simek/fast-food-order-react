
export default function Modifications({ instructions }) {
  return (
    <div>
      {
        instructions.map((instruction, i) => <ul key={instruction + i}>{instruction}</ul>)
      }
    </div>
  );
}

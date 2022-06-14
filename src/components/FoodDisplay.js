
export default function FoodDisplay({ foodId, drinkId, sideId }) {
  return (
    <div>
      <img src={`hamburger-${foodId}.jpeg`} width="150px"/>
      <img src={`soda-${drinkId}.jpeg`} width="150px"/>
      <img src={`side-${sideId}.jpeg`} width="150px"/>
    </div>
  );
}

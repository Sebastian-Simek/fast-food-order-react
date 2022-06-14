import DisplayName from './DisplayName';
import FoodDisplay from './FoodDisplay';

export default function OrderDisplay({ 
  foodId,
  sideId,
  drinkId,
  orderName,
  instructions
}) {
  return (
    <div>
      <DisplayName orderName={orderName}/>
      <FoodDisplay 
        foodId={foodId}
        sideId={sideId}
        drinkId={drinkId}      
      />
    </div>
  );
}

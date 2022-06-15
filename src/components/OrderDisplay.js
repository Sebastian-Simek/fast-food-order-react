import DisplayName from './DisplayName';
import FoodDisplay from './FoodDisplay';
import Modifications from './Modifications';

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
      <Modifications instructions={instructions}/>
    </div>
  );
}

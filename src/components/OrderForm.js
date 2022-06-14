import DrinkDropdown from './DrinkDropdown';
import FoodDropdown from './FoodDropdown';
import OrderName from './OrderName';
import SideDropdown from './SideDropdown';

export default function OrderForm({ 
  setFoodId, 
  setSideId, 
  setOrderName, 
  setDrinkId, 
  setInstructions
}) {
  return (
    <div>
      <FoodDropdown setFoodId={setFoodId}/>
      <DrinkDropdown setDrinkId={setDrinkId} />
      <SideDropdown setSideId={setSideId}/>
      <OrderName setOrderName={setOrderName}/>
    </div>
  );
}

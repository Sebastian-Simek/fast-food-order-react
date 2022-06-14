import DrinkDropdown from './DrinkDropdown';
import FoodDropdown from './FoodDropdown';
import Instructions from './Instructions';
import OrderName from './OrderName';
import SideDropdown from './SideDropdown';

export default function OrderForm({ 
  setFoodId, 
  setSideId, 
  setOrderName, 
  setDrinkId, 
  setInstructions,
  setInstructionForm,
  instructionForm,
  instructions
}) {
  return (
    <div>
      <FoodDropdown setFoodId={setFoodId}/>
      <DrinkDropdown setDrinkId={setDrinkId} />
      <SideDropdown setSideId={setSideId}/>
      <OrderName setOrderName={setOrderName}/>
      <Instructions 
        setInstructions={setInstructions}
        setInstructionForm={setInstructionForm}
        instructionForm={instructionForm}
        instructions={instructions}
      />
    </div>
  );
}

import DrinkDropdown from './DrinkDropdown';
import FoodDropdown from './FoodDropdown';
import Instructions from './Instructions';
import OrderName from './GetOrderName';
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
    <div className='user-inputs'>
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

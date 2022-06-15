import './App.css';
import { useState } from 'react';
import OrderForm from './components/OrderForm';
import OrderDisplay from './components/OrderDisplay';

function App() {
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [orderName, setOrderName] = useState('');
  const [instructionForm, setInstructionForm] = useState('');
  const [instructions, setInstructions] = useState([]);

  console.log('instruction form', instructionForm);
  console.log('instructions', instructions);


  return (
    <div className="App">
      <header>
        Welcome to the Hamburger Store!
      </header>
      <OrderForm 
        setFoodId={setFoodId}
        setSideId={setSideId}
        setOrderName={setOrderName}
        setDrinkId={setDrinkId}
        setInstructions={setInstructions}
        setInstructionForm={setInstructionForm}
        instructionForm={instructionForm}
        instructions={instructions}
      />
      <OrderDisplay 
        foodId={foodId}
        sideId={sideId}
        drinkId={drinkId}
        orderName={orderName}
        instructions={instructions}
      />
      <footer>
        Sebastian Simek 2022
      </footer>
    </div>
  );
}

export default App;

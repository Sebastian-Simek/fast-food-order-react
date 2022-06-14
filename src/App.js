import './App.css';
import { useState } from 'react';
import OrderForm from './components/OrderForm';
import OrderDisplay from './components/OrderDisplay';

function App() {
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [orderName, setOrderName] = useState('Your Order Here');
  const [instructions, setInstructions] = useState([]);

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
      />
      <OrderDisplay 
        foodId={foodId}
        sideId={sideId}
        drinkId={drinkId}
        orderName={orderName}
        instructions={instructions}
      />
    </div>
  );
}

export default App;

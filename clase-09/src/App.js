import './App.css';
// import ContadorUseReducer from "./plantillas-ejemplos-useReducer/ContadorUseReducer.js"
import ShoppingCart from './plantillas-ejemplos-useReducer/ShoppingCart';
import { ShoppingProvider } from './plantillas-ejemplos-useReducer/context/shoppingContext';

function App() {
  return (
    <div className="App">
      {/* <ContadorUseReducer></ContadorUseReducer> */}
      <ShoppingProvider>
        <ShoppingCart></ShoppingCart>
      </ShoppingProvider>
    </div>
  );
}

export default App;

import { createContext, useReducer } from "react";
import TYPES from "../actions/shoppingActions";
import { initialState, shoppingReducer } from "../reducers/shoppingReducer";

const ShoppingContext = createContext();

const ShoppingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingReducer, initialState);

  const { products, cart } = state;

  const setData = (data) => {
    data.length > 0
      ? dispatch({ type: TYPES.GET_ALL_PRODUCTS, payload: data })
      : dispatch({ type: TYPES.NO_PRODUCTS });
  }; //GET_ALL

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  }; //ADD

  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  }; //Solo id => REMOVE_ONE || id y true => REMOVE_ALL

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  }; //CLEAR

  const data = {
    products,
    cart,
    setData,
    addToCart,
    deleteFromCart,
    clearCart,
  };

  return (
    <ShoppingContext.Provider value={data}>{children}</ShoppingContext.Provider>
  );
};

export { ShoppingProvider };
export default ShoppingContext;

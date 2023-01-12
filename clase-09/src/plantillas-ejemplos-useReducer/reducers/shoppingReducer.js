import TYPES from "../actions/shoppingActions";

export const initialState = {
  products: [],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.GET_ALL_PRODUCTS: {
      return {
        ...state,
        products: action.payload.map((data) => data),
      };
    }

    case TYPES.ADD_TO_CART: {
      const newItem = state.products.find((prod) => prod.id === action.payload);

      const itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }

    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }

    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }

    case TYPES.CLEAR_CART: {
      return {
        ...state,
        cart: [],
      };
    }

    case TYPES.NO_PRODUCTS: {
      return initialState;
    }

    default:
      return state;
  }
}

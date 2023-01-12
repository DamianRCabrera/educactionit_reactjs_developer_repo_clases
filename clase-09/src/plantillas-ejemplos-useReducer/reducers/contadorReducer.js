import TYPES from "../actions/contadorActions";

export const initialState = {
  contador: 0,
};

export function contadorReducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:{
      return {
        contador: state.contador + 1
      }
  
    }
    case TYPES.INCREMENT_5:{
      return {
        contador: state.contador + action.payload
      }
    }
    case TYPES.RESET:{
      return initialState
    }
    case TYPES.DECREMENT:{
      return {
        contador: state.contador - 1
      }
    }
    case TYPES.DECREMENT_5:{
      return {
        contador: state.contador - action.payload
      }
    }
    default:{
      return state
    }
  }
}

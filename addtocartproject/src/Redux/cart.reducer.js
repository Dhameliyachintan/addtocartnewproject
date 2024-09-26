import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "./ActionType";

const initialState = {
  cart: [],
  error: null,
  loading: false
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          loading: false,
          cart: action.payload
        };
        case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          cart: action.payload
        };
    
    default:
      return state;
  }
};

export default cartReducer;

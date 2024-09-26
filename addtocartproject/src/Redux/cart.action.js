// src/redux/actions/cartActions.js

import axios from "axios";
import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from "./ActionType";

// Action Creators for Cart

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const fetchData = () => {
  return async (dispatch) => {  
    dispatch(fetchProductsRequest());
    try {
      const response = await axios.get("https://dummyjson.com/products/category/beauty");
      dispatch(fetchProductsSuccess(response.data.products));
    } catch (error) {
      dispatch(fetchProductsFailure(error));
    }
  };
};

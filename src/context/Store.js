import React, {createContext, useContext, useReducer} from 'react';
import {Reducer} from './Reducer';

// Create a Context
const Context = createContext();

// Define initial state and reducer function
const initialState = {
  cartItems: [],
  userData: {
    isAuthenticated: false,
  }, // Updated to store entire item data
};

// Create a Provider component to wrap your app
export const Provider = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const addToCart = itemData => {
    dispatch({type: 'ADD_TO_CART', payload: {itemData}});
  };

  const removeFromCart = itemId => {
    dispatch({type: 'REMOVE_FROM_CART', payload: {id: itemId}});
  };

  return (
    <Context.Provider
      value={{
        cart: state.cartItems,
        addToCart,
        removeFromCart,
        state,
        dispatch,
      }}>
      {children}
    </Context.Provider>
  );
};

// Create a custom hook to use the Context
export const useFetchState = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useFetchState must be used within a Provider');
  }
  return context;
};

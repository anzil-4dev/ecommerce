import AsyncStorage from '@react-native-async-storage/async-storage';

export const Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cartItems.find(
        item => item.id === action.payload.itemData.id,
      );

      if (existingItem) {
        // If the item is already in the cart, update the quantity
        const updatedCartItems = state.cartItems.map(item =>
          item.id === action.payload.itemData.id
            ? {...item, quantity: item.quantity + 1}
            : item,
        );

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        // If the item is not in the cart, add it with quantity 1
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            {...action.payload.itemData, quantity: 1},
          ],
        };
      }

    case 'REMOVE_FROM_CART':
      // Decrement the quantity, and remove if it becomes 0
      const updatedCartItems = state.cartItems
        .map(item => {
          if (item.id === action.payload.id) {
            const updatedQuantity = item.quantity - 1;
            return updatedQuantity > 0
              ? {...item, quantity: updatedQuantity}
              : null; // Remove the item by returning null when quantity is 0
          }
          return item;
        })
        .filter(Boolean); // Filter out null values to remove items with quantity 0

      return {
        ...state,
        cartItems: updatedCartItems,
      };

    case 'USER_AUTH':
      const userData = {...state.userData, ...action.userData};
      AsyncStorage.setItem('userData', JSON.stringify(userData));
      return {
        ...state,
        userData: userData,
      };

    case 'LOGOUT_USER':
      AsyncStorage.clear();
      return {
        cartItems: [],
        userData: {
          isAuthenticated: false,
        },
      };

    default:
      return state;
  }
};

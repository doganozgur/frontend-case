import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const existingIndex = state.items.findIndex(
        (item) => item.added === action.payload.added
      );
      if (existingIndex >= 0) {
        state.items[existingIndex] = {
          ...state.items[existingIndex],
          cartQuantity: state.items[existingIndex].cartQuantity + 1,
        };
      } else {
        let tempProduct = { ...action.payload, cartQuantity: 1 };
        state.items.push(tempProduct);
      }
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.added === action.payload.added
      );

      if (state.items[itemIndex].cartQuantity > 1) {
        state.items[itemIndex].cartQuantity -= 1;
      } else if (state.items[itemIndex].cartQuantity === 1) {
        const newCartItems = state.items.filter(
          (item) => item.added !== action.payload.added
        );
        state.items = newCartItems;
      }
    },
  },
});

export const { addToBasket, decreaseQuantity } = basketSlice.actions;

export default basketSlice.reducer;

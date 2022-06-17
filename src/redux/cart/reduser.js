import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsCart: [],
  },
  reducers: {
    setItemCart: (state, action) => {
      state.itemsCart.push(action.payload)
    },
    deleteItemCart: (state, action) => {
      state.itemsCart = state.itemsCart.filter(game => game.id !== action.payload)
    },
  }
});

export const { setItemCart, deleteItemCart } = cartSlice.actions;
export default cartSlice.reducer;
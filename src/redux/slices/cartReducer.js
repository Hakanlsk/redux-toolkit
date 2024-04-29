import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Sepetteki ürünler
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // Sepette araç zaten varsa
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1; // Miktarını arttır
      } else {
        // Yeni araç eklerken başlangıç miktarını belirleyin
        state.items.push({ ...action.payload, quantity: 1 }); // Yeni eklenen öğe için quantity 1 olmalı
      }
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity -= 1; // Miktarını azalt
        if (existingItem.quantity === 0) {
          // Eğer miktar 0 ise sepetten kaldır
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          ); // Filtreleme ve sepetten çıkarma
        }
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
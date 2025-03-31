import { createSlice } from "@reduxjs/toolkit";
import { initialBooks, categories } from "./dummyData";
import { configureStore } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: { books: initialBooks, categories },
  reducers: {
    addBook: (state, action) => {
      if (!state.categories.includes(action.payload.category)) {
        alert("Please choose from available categories.");
        return;
      }
      if (action.payload.rating >= 5) {
        alert("Rating must be below 5.");
        return;
      }
      state.books.push({ id: Date.now(), ...action.payload });
    },
  },
});

export const { addBook } = booksSlice.actions;
export const store = configureStore({ reducer: { books: booksSlice.reducer } });

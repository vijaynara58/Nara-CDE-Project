import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {

    //Actions
    addToBasket: (state, action) => {
      //...represents spreading. We are spreading the items from initialState(items array[])
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id)
      let newBasket = [...state.items];

      if (index >= 0) {
        //The item exists in the basket.. remove it...
        newBasket.splice(index, 1)
      }
      else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as it is not in the basket`
        )
      }
      //Basket after the item has been removed
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;


//Reduce is a function in React
//This function below will have access to the state and will loop through all the items and give a "total" which will start at 0, and add the item.price of each item to the total which starts at 0
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0)

export default basketSlice.reducer;

import { IRestaurantModel } from "@/Models/RestaurantModel";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialStateProps {
  cart: number[];
  restaurant: IRestaurantModel | null;
}

const initialState: IInitialStateProps = {
  cart: [],
  restaurant: null,
};

const cartService = createSlice({
  name: "Card",
  initialState: initialState,
  reducers: {
    setRestaurant: (state, { payload }: { payload: IRestaurantModel }) => {
      state.restaurant = payload;
    },
    selectItem: (state, { payload }: { payload: number }) => {
      if (!state.cart.includes(payload)) {
        state.cart = [...state.cart, payload];
      } else {
        state.cart = state.cart.filter((i) => i !== payload);
      }
    },
    resetCart: (state) => {
      state.cart = [];
      state.restaurant = null;
    },
  },
});

export const { selectItem, setRestaurant, resetCart } = cartService.actions;

export default cartService.reducer;

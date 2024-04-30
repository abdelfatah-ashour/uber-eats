import { configureStore } from "@reduxjs/toolkit";

import authService from "@/Services/reducers/authReducer";
import cartService from "@/Services/reducers/cartReducer";
import currentTabService from "@/Services/reducers/currentScreen";
import favoritesReducer from "@/Services/reducers/favoritesReducer";
import scrollUpService from "@/Services/reducers/isScrollUp";
import restaurantDetailsService from "@/Services/reducers/restaurantDetails";
import locationReducer from "@/Services/reducers/searchLocation";

export const store = configureStore({
  reducer: {
    location: locationReducer,
    currentTab: currentTabService,
    restaurantDetails: restaurantDetailsService,
    cart: cartService,
    favorites: favoritesReducer,
    scrollUp: scrollUpService,
    auth: authService,
  },
});

import { db } from "@/lib/firebase";
import { IRestaurantModel } from "@/Models/RestaurantModel";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";

const favoritesCollection = collection(db, "Favorites");

export const getFavorites = createAsyncThunk(
  "favorites",
  async function (_, api) {
    const favorites = await getDocs(favoritesCollection);
    let result: IRestaurantModel[] = [];

    favorites.docs.map((doc) => {
      doc.data();
      result.push(doc.data() as IRestaurantModel);
    });

    if (result.length) {
      return result;
    } else {
      return api.rejectWithValue("You're empty favorites");
    }
  }
);

const initState: IFavorite = {
  favorites: [],
  loading: false,
  error: null,
};

interface IFavorite {
  favorites: IRestaurantModel[];
  loading: boolean;
  error: string | null;
}

const favoritesReducer = createSlice({
  name: "Favorites",
  initialState: initState,
  reducers: {
    addFavorite: function (state, { payload }: { payload: IRestaurantModel }) {
      state.favorites = [...state.favorites, payload];
    },
    removeFavorite: function (state, { payload }: { payload: string }) {
      state.favorites = state.favorites.filter((s) => s.id !== payload);
    },
    reset: function (state) {
      state.favorites = initState.favorites;
      state.loading = initState.loading;
      state.error = initState.error;
    },
  },
  extraReducers(builder) {
    builder.addCase(getFavorites.pending, function (state) {
      state.loading = true;
    });
    builder.addCase(
      getFavorites.fulfilled,
      (state, { payload }: PayloadAction<IRestaurantModel[], string>) => {
        state.loading = false;
        state.favorites = payload;
      }
    );
    builder.addCase(getFavorites.rejected, function (state, { error }) {
      state.loading = false;
      state.error = error?.message || "something went wrong.";
    });
  },
});

export const { reset, addFavorite, removeFavorite } = favoritesReducer.actions;

export default favoritesReducer.reducer;

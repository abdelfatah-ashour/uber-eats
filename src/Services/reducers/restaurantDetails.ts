import { YELP_API_KEY } from "@/lib/config";
import { IRestaurantDetails } from "@/Models/RestaurantModel";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getRestaurantDetails = createAsyncThunk(
  "GET_Restaurant_Details",
  function (id: string, { fulfillWithValue, rejectWithValue }) {
    return fetch(`https://api.yelp.com/v3/businesses/${id}`, {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        return fulfillWithValue(data as IRestaurantDetails);
      })
      .catch(() => {
        return rejectWithValue("Something went wrong.");
      });
  }
);

type InitState = {
  data: IRestaurantDetails | null;
  loading: boolean;
  error: string;
};

const initState: InitState = {
  data: null,
  error: "",
  loading: false,
};

const restaurantDetailsService = createSlice({
  name: "Restaurant_Details",
  initialState: initState,
  reducers: {
    reset: function (state) {
      state.data = initState.data;
      state.loading = initState.loading;
      state.error = initState.error;
    },
  },
  extraReducers(builder) {
    builder.addCase(getRestaurantDetails.pending, function (state) {
      state.loading = true;
    });
    builder.addCase(
      getRestaurantDetails.fulfilled,
      function (state, { payload }) {
        state.loading = false;
        state.data = payload;
      }
    );

    builder.addCase(
      getRestaurantDetails.rejected,
      function (state, { payload }) {
        state.loading = false;
        state.error = payload as string;
      }
    );
  },
});

export const { reset } = restaurantDetailsService.actions;

export default restaurantDetailsService.reducer;

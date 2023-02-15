import { createSlice } from "@reduxjs/toolkit";
// import { RootState, AppThunk } from "../../app/store";

export interface sets {
  loading: boolean;
}

const initialState: sets = {
  loading: false,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    endLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { startLoading,endLoading } = settingsSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default settingsSlice.reducer;

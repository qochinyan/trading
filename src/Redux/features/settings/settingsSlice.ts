import { createSlice } from "@reduxjs/toolkit";
// import { RootState, AppThunk } from "../../app/store";

export interface sets {
  loading: boolean;
  connection: boolean;
}

const initialState: sets = {
  loading: false,
  connection:true
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
    setConnection: (state,action) => {
      state.connection =  action.payload.payload
    },
  },
});

export const { startLoading, endLoading ,setConnection} = settingsSlice.actions;

export default settingsSlice.reducer;

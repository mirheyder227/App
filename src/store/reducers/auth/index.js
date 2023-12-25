import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token:"20f972eca88af32463a7e764b57b39d6f7312eff0ace5bfa0b0e05d0b392a381140a932aaab65c65410cbd3f6a818c055d7ec4494728886ef640f6212d253999d6fb8dae005f9c6072e5a605ce4cbee742928d573b6f0528472b8ddbd1d1ed10589b62fd87aeae0a37999fca1df4ba3fb745423492aa5c67a971aee6031f8ddd",
  status: "noting",
  userData: {},
  error: "",
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUserInfo: (state, { payload }) => {
      state.token = payload.jwt;
      state.userData = payload.user;
    },
    logout: (state,  ) => {
      state.token =  "";
      state.userData = "";
    },
  },
});

export const { getUserInfo,logout } = authReducer.actions;

export default authReducer.reducer;

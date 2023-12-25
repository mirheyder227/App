import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts } from "./productThunk";

const initialState = {
  products:[],
  status: "noting",
   error: "",
};

export const productReducer = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers:{
    [fetchAllProducts.pending]:(state)=>{
state.status="pending"
    },
    [fetchAllProducts.fulfilled]:(state,{payload})=>{
state.status="succes"

        state.products=payload
    },
    [fetchAllProducts.rejected]:(state,{payload})=>{
state.status="error"
state.error=payload

    }

  }
});

// export const { getUserInfo,logout } = productReducer.actions;

export default productReducer.reducer;

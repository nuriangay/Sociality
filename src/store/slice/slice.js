import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import dataService from "../service/service";
import data from './data.json'

const initialState={
    infos:{},
    success:true,
    error:false,
    loading:false
}

export const Slice=createAsyncThunk('/data',async({})=>{
    return data

})

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder


            .addCase(Slice.pending, state => {
                state.loading = true
            })
            .addCase(Slice.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.infos=action.payload
                
                
            })
            .addCase(Slice.rejected, (state, action) => {
                state.loading = false
                state.error = true
                state.message = action.payload
            })
            
        

    }
})



export default dataSlice.reducer

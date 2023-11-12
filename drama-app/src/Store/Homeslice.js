import { createSlice } from '@reduxjs/toolkit'

export const HomeSlice = createSlice({
  name: 'home',
  initialState:{
   url:{},
  },
  reducers: {
    getApiConfiguration:(state,action)=>{
    state.url = action.payload
    },

  },
})

export const {getApiConfiguration,getGenrea  } = HomeSlice.actions

export default HomeSlice.reducer
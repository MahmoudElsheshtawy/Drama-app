import { configureStore } from '@reduxjs/toolkit'

import  HomeSlice from '../Store/Homeslice'

export const store = configureStore({

  reducer: {Home:HomeSlice},
})
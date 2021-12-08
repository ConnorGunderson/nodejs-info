import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { routeSlice } from './slices'

const reducer = combineReducers({
  route: routeSlice.reducer,
})

export const store = configureStore({
  reducer,
  middleware: [],
})

export type RootState = ReturnType<typeof reducer>
export type AppDispatch = typeof store.dispatch

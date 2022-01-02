import { Action, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { modules } from 'global/meta'

type RouterState = {
  subModule: string
  moduleStep: number
}

const initialState = {
  subModule: '',
  moduleStep: 0,
} as RouterState

export const routeSlice = createSlice({
  name: 'router',
  initialState,
  reducers: {
    decrementModuleStep: (state) => {
      state.moduleStep > 0 && state.moduleStep--
    },
    incrementModuleStep: (state, action: PayloadAction<number>) => {
      if (
        action.payload < modules.length &&
        state.moduleStep < modules.length - 1
      ) {
        state.moduleStep = action.payload
      }
    },
    setSubModule: (state, action: PayloadAction<string>) => {
      state.subModule = action.payload
    },
  },
})

export const { incrementModuleStep, decrementModuleStep, setSubModule } =
  routeSlice.actions

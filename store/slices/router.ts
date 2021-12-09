import { Action, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { modules } from 'global/meta'

type RouterState = { currentModule: string; moduleStep: number }

const initialState = { currentModule: '', moduleStep: 0 } as RouterState

export const routeSlice = createSlice({
  name: 'router',
  initialState,
  reducers: {
    changeRoute: (state, action: PayloadAction<string>) => {
      state.currentModule = action.payload
    },
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
  },
})

export const { changeRoute, incrementModuleStep, decrementModuleStep } =
  routeSlice.actions

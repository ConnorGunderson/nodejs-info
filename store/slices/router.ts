import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type RouterState = { currentModule: string }

const initialState = { currentModule: '' } as RouterState

export const routeSlice = createSlice({
  name: 'router',
  initialState,
  reducers: {
    changeRoute: (state, action: PayloadAction<string>) => {
      state.currentModule = action.payload
    },
  },
})

export const { changeRoute } = routeSlice.actions

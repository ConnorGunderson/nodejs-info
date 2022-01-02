import { Action, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { modules } from 'global/meta'

type GlobalSettingsState = {
  moduleResolution: 'cjs' | 'ems'
}

const initialState = {
  moduleResolution: 'cjs',
} as GlobalSettingsState

export const globalSettingsSlice = createSlice({
  name: 'globalSettings',
  initialState,
  reducers: {
    setModuleResolution: (state, action: PayloadAction<'cjs' | 'ems'>) => {
      state.moduleResolution = action.payload
    },
  },
})

export const { setModuleResolution } = globalSettingsSlice.actions

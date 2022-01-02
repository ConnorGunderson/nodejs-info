import { useDispatch, useSelector } from 'react-redux'
import { setModuleResolution } from 'store/slices/globalSettings'
import { RootState } from 'store/store'

export const useGlobalSettings = () => {
  const { moduleResolution } = useSelector(
    (state: RootState) => state.globalSettings
  )
  const dispatch = useDispatch()

  return {
    moduleResolution,
    setModuleResolution: () => {
      dispatch(setModuleResolution(moduleResolution === 'cjs' ? 'ems' : 'cjs'))
    },
  }
}

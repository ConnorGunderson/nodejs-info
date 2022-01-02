import { useRouter } from 'next/dist/client/router'
import { useDispatch, useSelector } from 'react-redux'
import { setSubModule } from 'store/slices'
import { RootState } from 'store/store'

export const useRoute = () => {
  const { moduleStep, subModule } = useSelector(
    (state: RootState) => state.route
  )
  const router = useRouter()
  const dispatch = useDispatch()

  return {
    moduleStep,
    subModule,
    setRoute: (newRoute: string) => {
      dispatch(setSubModule(''))
      return router.push(newRoute)
    },
    setSubModule: (newSubModule: string) => {
      dispatch(setSubModule(newSubModule))
    },
  }
}

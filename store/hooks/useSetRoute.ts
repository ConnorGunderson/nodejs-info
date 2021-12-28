import { useRouter } from 'next/dist/client/router'
import { useDispatch } from 'react-redux'
import { setRoute, setSubModule } from 'store/slices'

export const useSetRoute = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  return {
    setRoute: (newRoute: string) => {
      dispatch(setRoute(newRoute))
      router.push(newRoute)
    },
    setSubModule: (newSubModule: string) => {
      dispatch(setSubModule(newSubModule))
    },
  }
}

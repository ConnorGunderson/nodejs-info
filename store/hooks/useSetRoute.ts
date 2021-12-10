import { useRouter } from 'next/dist/client/router'
import { useDispatch } from 'react-redux'
import { setRoute } from 'store/slices'
export const useSetRoute = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  return (newRoute: string) => {
    dispatch(setRoute(newRoute))
    router.push(newRoute)
  }
}

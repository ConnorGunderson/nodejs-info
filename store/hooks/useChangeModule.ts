import { useRouter } from 'next/dist/client/router'
import { useDispatch } from 'react-redux'
import { changeRoute } from 'store/slices'
export const useChangeRoute = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  return (newRoute: string) => {
    dispatch(changeRoute(newRoute))
    router.push(newRoute)
  }
}

import { useRouter } from 'next/dist/client/router'

const ModulesPage = () => {
  const router = useRouter()
  return router.push('/modules/assert')
}

export default ModulesPage

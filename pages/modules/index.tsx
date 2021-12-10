import { PageLayout } from '@components/layout'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import AssertPage from './assert'

const ModulesPage = () => {
  const { moduleStep } = useSelector((state: RootState) => state.route)
  return pages[moduleStep]
}

export default ModulesPage

const pages = [<AssertPage />, <AssertPage />]

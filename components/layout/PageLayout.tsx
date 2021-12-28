import { ClassHeading } from '@components/custom'
import { ComponentWithChildren } from '@global/types/index'
import { modules } from 'global/meta'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSubModule } from 'store/slices'
import { RootState } from 'store/store'
import { Navbar } from '.'

interface PageLayoutProps extends ComponentWithChildren {
  subModuleComponents: Record<string, JSX.Element>
}

export const PageLayout = ({
  children,
  subModuleComponents,
}: PageLayoutProps) => {
  const { moduleStep, subModule } = useSelector(
    (state: RootState) => state.route
  )
  const dispatch = useDispatch()
  const router = useRouter()
  useEffect(() => {
    const routerQuery = router?.query['subModule']
    if (typeof routerQuery == 'string') {
      dispatch(setSubModule(routerQuery))
    }
  }, [router.query])
  return (
    <>
      <Navbar />
      <main className="p-2 flex-1 flex flex-col overflow-y-scroll animate-fade-in">
        <header className="flex items-center p-2">
          <h1 className="px-2 inline-block rounded text-3xl font-bold text-nodeLight-4">
            {modules[moduleStep].name}
          </h1>
          <p className="pl-2 italic font-semibold">
            {modules[moduleStep].description
              ? '- ' + modules[moduleStep].description
              : ''}
          </p>
        </header>
        <section className="p-4 border flex-1 flex">
          <div className="w-2/5 flex flex-col">{children}</div>
          <div className="w-3/5 inline-flex flex-col">
            <div className="block mb-2">
              <ClassHeading className="inline-block">{subModule}</ClassHeading>
            </div>
            <div className="p-3 shadow-inner flex-1 rounded-sm bg-nodeLight-1">
              {subModule && subModuleComponents[subModule]}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

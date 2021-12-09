import { ComponentWithChildren } from '@global/types/index'
import { modules } from 'global/meta'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { Navbar } from '.'

export const PageLayout = ({ children }: ComponentWithChildren) => {
  const { moduleStep } = useSelector((state: RootState) => state.route)
  return (
    <>
      <Navbar />
      <section className="inline-flex flex-col p-2 flex-1">
        <div className="flex items-center">
          <h1 className="px-2 inline-block rounded shadow-md text-2xl font-bold text-nodeLight-3 bg-black ">
            {modules[moduleStep].name}
          </h1>
          <p className="pl-2 italic font-semibold">
            {modules[moduleStep].description
              ? '- ' + modules[moduleStep].description
              : ''}
          </p>
        </div>
        <div className="p-4 ">{children}</div>
      </section>
    </>
  )
}

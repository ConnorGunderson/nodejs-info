import { ComponentWithChildren } from '@global/types/index'
import { Navbar } from '.'

export const PageLayout = ({ children }: ComponentWithChildren) => {
  return (
    <>
      <Navbar />
      <div className="p-2">
        <h1 className="text-2xl">{children}</h1>
      </div>
    </>
  )
}

import { ComponentWithChildren } from '@global/types/index'
import { Navbar } from '.'

export const PageLayout = ({ children }: ComponentWithChildren) => {
  return (
    <>
      <Navbar />
      <div className="flex-1 flex items-center justify-center">{children}</div>
    </>
  )
}

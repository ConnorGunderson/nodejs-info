import { ComponentWithChildren } from '@global/types/index'
import { Navbar } from '.'

export const PageLayout = ({ children }: ComponentWithChildren) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  )
}

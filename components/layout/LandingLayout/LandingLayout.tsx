import { ComponentWithChildren } from '@global/types/index'
import { Input } from '@components/base'

export const LandingLayout = ({ children }: ComponentWithChildren) => {
  return (
    <>
      <nav className="w-full h-1/3 flex flex-col items-center justify-center text-nodeLight-100 bg-nodeDark-500 shadow-xl">
        <h1 className="text-4xl font-bold">Nodejs.info</h1>
        <p className="my-2 text-lg">
          Learning Material and Modules by Connor Gunderson
        </p>
        <Input id="landing-input">Search Directory</Input>
      </nav>
      <div>{children}</div>
    </>
  )
}

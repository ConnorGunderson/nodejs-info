import { ComponentWithChildren } from '@global/types/index'
import { Input } from '@components/base'
import styles from './landing.module.css'

export const LandingLayout = ({ children }: ComponentWithChildren) => {
  return (
    <>
      <nav className={styles['landing-navbar']}>
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

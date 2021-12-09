import { HTMLAttributes } from 'react'
import styles from './ClassHeading.module.css'

interface ClassHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  name?: string
}

export const ClassHeading = ({ children, ...props }: ClassHeadingProps) => {
  return (
    <h2 className={styles['heading']} {...props}>
      {children}
    </h2>
  )
}

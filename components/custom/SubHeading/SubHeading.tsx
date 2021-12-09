import { HTMLAttributes } from 'react'
import styles from './SubHeading.module.css'

interface SubHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  name?: string
}

export const SubHeading = ({ children, ...props }: SubHeadingProps) => {
  return (
    <h3 className={styles['heading']} {...props}>
      - {children}
    </h3>
  )
}

import { AddClassNames } from '@global/types/react'
import { InputHTMLAttributes } from 'react'
import styles from './container.module.css'

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLDivElement>, 'className'> {
  children: React.ReactNode
  classNames?: AddClassNames<['container']>
}

export const Container = ({ classNames, children, ...props }: InputProps) => {
  return (
    <div className={styles['container'] + ` ${classNames?.container || ''}`}>
      {children}
    </div>
  )
}

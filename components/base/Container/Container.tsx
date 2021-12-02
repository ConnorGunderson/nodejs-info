import { AddClassNames } from '@global/types/react'
import { InputHTMLAttributes } from 'react'
import styles from './container.module.css'

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLDivElement>, 'className'> {
  children: React.ReactNode
  className?: AddClassNames<['container']>
}

export const Container = ({ className, children, ...props }: InputProps) => {
  return (
    <div className={styles['container'] + ` ${className?.container || ''}`}>
      {children}
    </div>
  )
}

import { AddClassNames } from '@global/types/react'
import { InputHTMLAttributes } from 'react'
import styles from './input.module.css'

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  children: React.ReactNode
  classNames?: AddClassNames<['container', 'label', 'input']>
}

export const Input = ({ classNames, children, id, ...props }: InputProps) => {
  return (
    <div
      className={styles['input-container'] + ` ${classNames?.container || ''}`}
    >
      <label htmlFor={id} className={classNames?.label || ''}>
        {children}
      </label>
      <input
        className={styles['input'] + ` ${classNames?.label || ''}`}
        placeholder="..."
        id={id}
        {...props}
      />
    </div>
  )
}

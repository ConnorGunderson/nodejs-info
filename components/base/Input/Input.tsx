import { AddClassNames } from '@global/types/react'
import { InputHTMLAttributes } from 'react'
import styles from './input.module.css'

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  children: React.ReactNode
  className?: AddClassNames<['container', 'label', 'input']>
}

export const Input = ({ className, children, id, ...props }: InputProps) => {
  return (
    <div
      className={styles['input-container'] + ` ${className?.container || ''}`}
    >
      <label htmlFor={id} className={className?.label || ''}>
        {children}
      </label>
      <input
        className={styles['input'] + ` ${className?.label || ''}`}
        placeholder="..."
        id={id}
        {...props}
      />
    </div>
  )
}

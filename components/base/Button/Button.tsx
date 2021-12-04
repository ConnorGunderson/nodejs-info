import { AddClassNames } from '@global/types/react'
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  InputHTMLAttributes,
} from 'react'
import styles from './Button.module.css'

interface InputProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  children: React.ReactNode
  classNames?: AddClassNames<['button']>
  reverse?: boolean
}

export const Button = ({
  classNames,
  children,
  id,
  reverse,
  ...props
}: InputProps) => {
  return (
    <button
      className={
        (reverse ? styles['reverse'] : styles['button']) +
        ` ${classNames?.button}`
      }
      {...props}
    >
      {children}
    </button>
  )
}

interface AnchorButtonProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> {
  children: React.ReactNode
  classNames?: AddClassNames<['button']>
  reverse?: boolean
}

export const AnchorButton = ({
  classNames,
  children,
  id,
  reverse,
  ...props
}: AnchorButtonProps) => {
  return (
    <a
      className={
        (reverse ? styles['reverse'] : styles['anchor-button']) +
        ` ${classNames?.button}`
      }
      {...props}
    >
      {children}
    </a>
  )
}

import { AddClassNames } from '@global/types/react'
import { AllHTMLAttributes, HTMLAttributes, InputHTMLAttributes } from 'react'
import styles from './Card.module.css'

interface CardProps extends AllHTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <section className={styles['card'] + ` ${className || ''}`} {...props}>
      {children}
    </section>
  )
}

Card.Header = ({ children, className, ...props }: CardProps) => {
  return (
    <header className={styles['card-header'] + ` ${className}`} {...props}>
      {children}
    </header>
  )
}

Card.Body = ({ children, className, ...props }: CardProps) => {
  return (
    <body className={styles['card-body'] + ` ${className}`} {...props}>
      {children}
    </body>
  )
}

Card.Footer = ({ children, className, ...props }: CardProps) => {
  return (
    <footer className={styles['card-footer'] + ` ${className}`} {...props}>
      {children}
    </footer>
  )
}

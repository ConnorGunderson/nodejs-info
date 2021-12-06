import { AddClassNames } from '@global/types/react'
import { useRouter } from 'next/dist/client/router'
import { HTMLAttributes } from 'react'
import { FaNodeJs } from 'react-icons/fa'
import styles from './NodeHeader.module.css'

interface NodeHeaderProps
  extends Omit<HTMLAttributes<HTMLHeadingElement>, 'className'> {
  classNames?: AddClassNames<['header', 'logo']>
}

export const NodeHeader = ({ classNames }: NodeHeaderProps) => {
  const router = useRouter()

  return (
    <header
      onClick={() => router.push('/')}
      className={styles['node-header'] + ` ${classNames?.header || ''}`}
    >
      <h1>N</h1>
      <span className="animate-wiggle ">
        <FaNodeJs
          className={styles['node-header-logo'] + ` ${classNames?.logo || ''}`}
        />
      </span>
      <h1>dejs.info</h1>
    </header>
  )
}

import { AddClassNames } from '@global/types/react'
import { HTMLAttributes, useState } from 'react'
import { ClassHeading, SubHeading } from '..'
import styles from './ModuleSection.module.css'

interface ModuleSectionProps extends HTMLAttributes<HTMLHeadingElement> {
  // classNames?: AddClassNames<['header', 'logo']>
  sectionHeader?: string
  subSectionHeaders: string[]
}

export const ModuleSection = ({
  className,
  sectionHeader,
  subSectionHeaders,
}: ModuleSectionProps) => {
  const [show, setShow] = useState<boolean>(false)
  return (
    <div className={styles['module-section'] + ` ${className}`}>
      {sectionHeader && (
        <div>
          <ClassHeading onClick={() => setShow(!show)}>
            {sectionHeader}
          </ClassHeading>
        </div>
      )}
      {(show || !sectionHeader) && (
        <ul
          className={
            styles['sub-section'] + ` ${!sectionHeader ? 'ml-0' : 'ml-10'}`
          }
        >
          {subSectionHeaders.map((h) => {
            return (
              <li>
                <SubHeading onClick={() => h}>{h}</SubHeading>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

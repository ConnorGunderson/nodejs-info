import { AddClassNames } from '@global/types/react'
import { HTMLAttributes, useState } from 'react'
import styles from './ModuleSection.module.css'

interface ModuleSectionProps
  extends Omit<HTMLAttributes<HTMLHeadingElement>, 'className'> {
  classNames?: AddClassNames<['header', 'logo']>
  sectionHeader?: string
  subSectionHeaders: string[]
}

export const ModuleSection = ({
  classNames,
  sectionHeader,
  subSectionHeaders,
}: ModuleSectionProps) => {
  const [show, setShow] = useState<boolean>(false)
  return (
    <section className={styles['module-section']}>
      {sectionHeader && (
        <div>
          <h2
            className={styles['section-heading']}
            onClick={() => setShow(!show)}
          >
            - {sectionHeader}
          </h2>
        </div>
      )}
      {(show || !sectionHeader) && (
        <div
          className={
            styles['sub-section'] + ` ${!sectionHeader ? 'ml-0' : 'ml-10'}`
          }
        >
          {subSectionHeaders.map((h) => {
            return (
              <div>
                <h3> - {h}</h3>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}

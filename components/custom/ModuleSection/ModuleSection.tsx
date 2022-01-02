import { useRouter } from 'next/dist/client/router'
import React, { HTMLAttributes, useState } from 'react'
import { useRoute } from 'store/hooks'
import { ClassHeading, SubHeading } from '..'
import styles from './ModuleSection.module.css'

interface ModuleSectionProps extends HTMLAttributes<HTMLHeadingElement> {
  sectionHeader?: string
  subSectionHeaders: string[]
}

export const ModuleSection = ({
  className,
  sectionHeader,
  subSectionHeaders,
}: ModuleSectionProps) => {
  const [show, setShow] = useState<boolean>(false)
  const { setRoute, subModule } = useRoute()
  const router = useRouter()

  const handleClassHeadingClick = () => {
    if (
      subModule === sectionHeader ||
      subSectionHeaders.filter((sh) => sh !== subModule).length
    ) {
      setShow(!show)
    }

    return setRoute(router.pathname + `?subModule=${sectionHeader}`)
  }

  return (
    <div className={styles['module-section'] + ` ${className}`}>
      {sectionHeader && (
        <div>
          <ClassHeading onClick={() => handleClassHeadingClick()}>
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
          {subSectionHeaders.map((subSectionHeader) => {
            return (
              <li key={subSectionHeader}>
                <SubHeading
                  onClick={() =>
                    setRoute(router.pathname + `?subModule=${subSectionHeader}`)
                  }
                >
                  {subSectionHeader}
                </SubHeading>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

import { AddClassNames } from '@global/types/react'
import { modules } from 'global/meta'
import { useRouter } from 'next/dist/client/router'
import { HTMLAttributes, useState } from 'react'
import { useSelector } from 'react-redux'
import { useSetRoute } from 'store/hooks'
import { RootState } from 'store/store'
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
  const { setRoute } = useSetRoute()
  const router = useRouter()

  const handleClassHeadingClick = () => {
    setShow(!show)
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

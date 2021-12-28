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
  const { moduleStep } = useSelector((state: RootState) => state.route)
  const { setRoute } = useSetRoute()
  const router = useRouter()

  const handleClassHeadingClick = (sectionHeader: string) => {
    setRoute(
      router.pathname +
        `?name=${modules[moduleStep].name}&subModule=${sectionHeader}`
    )
    return setShow(!show)
  }
  return (
    <div className={styles['module-section'] + ` ${className}`}>
      {sectionHeader && (
        <div>
          <ClassHeading onClick={() => handleClassHeadingClick(sectionHeader)}>
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
              <li key={h}>
                <SubHeading
                  onClick={() =>
                    setRoute(
                      router.pathname +
                        `?name=${modules[moduleStep].name}&subModule=${h}`
                    )
                  }
                >
                  {h}
                </SubHeading>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

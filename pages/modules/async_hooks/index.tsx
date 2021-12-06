import { PageLayout } from '@components/layout'
import { useEffect, useState } from 'react'
import styles from './asyncHooks.module.css'

const AssertPage = () => {
  const [time, setTime] = useState(0)
  const initialTime = Date.now()
  useEffect(() => {
    const timer = setTimeout(() => {
      const newTime = time + (Date.now() - initialTime) / 1000
      if (newTime > 12.5 || time > 12.5) {
        initialTime === Date.now()
        return setTime(0)
      }
      return setTime(newTime)
    }, 1)

    return () => clearTimeout(timer)
  })
  return (
    <PageLayout>
      <div className="circle_box text-center">
        <svg className={styles['svg']}>
          <circle r="95" cx="100" cy="100" />
          <circle
            r="95"
            cx="100"
            cy="100"
            style={{
              strokeDasharray: 'calc(100 * 6)',
              strokeDashoffset: `calc(((100*6) - (100 * 6) * ${
                time * 8
              })/ 100)`,
            }}
          />
        </svg>
        {Math.round(time)}
      </div>
    </PageLayout>
  )
}

export default AssertPage

import { NodeHeader } from '@components/custom'
import { modules } from 'global/meta'
import { useRouter } from 'next/dist/client/router'
import React, { HTMLAttributes, useEffect, useState } from 'react'
import { FaChevronCircleLeft } from 'react-icons/fa'
import { useChangeRoute } from 'store/hooks'
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <>
      <nav className={styles['navbar']}>
        <NodeHeader classNames={{ header: 'text-2xl' }} />
        <ModuleList />
      </nav>
    </>
  )
}

const ModuleList = () => {
  const router = useRouter()
  const [index] = useState<number>(() => {
    const mod = modules.find(
      (module) => module.name == router.asPath.split('#')[1]
    )
    return mod ? modules.indexOf(mod) : -1
  })
  console.log(index)
  return <Carousel moduleIndex={index} items={modules} />
}
interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  width: string | number
}

const CarouselItem = ({
  children,
  width,
  onClick,
  className,
}: CarouselItemProps) => {
  return (
    <div
      className={'inline-flex items-center justify-center h-100 ' + className}
      style={{ width }}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

type NamedItem = { name: string }

const Carousel = ({
  moduleIndex,
  items,
}: {
  moduleIndex: number
  items: NamedItem[]
}) => {
  const [step, setStep] = useState<number>(moduleIndex)

  const handleStep = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    const foundItem = items.find(
      (item) => item.name === e.currentTarget.innerText
    )

    const itemIndex = foundItem ? items.indexOf(foundItem) : -1
    return setStep(itemIndex)
  }

  const handleChevron = () => {
    return step > 0 && setStep(step - 1)
  }

  return (
    <section
      className="flex items-center select-none pl-2"
      style={{ width: '30rem' }}
    >
      <a className="z-10 cursor-pointer">
        <FaChevronCircleLeft onClick={() => handleChevron()} />
      </a>
      <figure className="overflow-hidden z-0 flex-1">
        <div
          className="whitespace-nowrap duration-150 ease-in"
          style={{ transform: `translateX(-${step * 33}%)` }}
        >
          {items.map((item) => {
            return (
              <CarouselItem
                key={item.name}
                className={items[step].name !== item.name ? 'opacity-70' : ''}
                onClick={(e: React.MouseEvent<HTMLDivElement>) => handleStep(e)}
                width={'33%'}
              >
                {item.name}
              </CarouselItem>
            )
          })}
        </div>
      </figure>
    </section>
  )
}

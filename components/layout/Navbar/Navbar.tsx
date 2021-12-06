import { NodeHeader } from '@components/custom'
import { ComponentWithChildren } from '@global/types/react'
import { Module, modules } from 'global/meta'
import { useRouter } from 'next/dist/client/router'
import React, {
  Children,
  cloneElement,
  HTMLAttributes,
  ReactChild,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import { FaChevronCircleLeft, FaNodeJs } from 'react-icons/fa'
import styles from './Navbar.module.css'

export const Navbar = () => {
  const router = useRouter()
  return (
    <>
      <nav className={styles['navbar']}>
        <NodeHeader classNames={{ header: 'text-2xl' }} />
        <ModuleList initialPath="assert" />
      </nav>
    </>
  )
}

interface ModuleListProps {
  initialPath: string
}

const delay = 2500

const ModuleList = ({ initialPath }: ModuleListProps) => {
  const [index, setIndex] = useState<number>(() => {
    const mod = modules.find((module) => module.name == initialPath)
    return mod ? modules.indexOf(mod) : -1
  })

  return <Carousel initialIndex={index} initialItems={modules} />
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
  initialIndex,
  initialItems,
}: {
  initialIndex: number
  initialItems: NamedItem[]
}) => {
  const [items, setitems] = useState<NamedItem[]>(initialItems)
  const [step, setStep] = useState<number>(
    initialIndex === 0 ? 1 : initialIndex
  )

  const handleStep = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    const foundItem = items.find(
      (item) => item.name === e.currentTarget.innerText
    )

    if (foundItem?.name === 'REPLACE') return null

    const itemIndex = foundItem ? items.indexOf(foundItem) : -1
    return foundItem && setStep(itemIndex)
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

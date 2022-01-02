import { NodeHeader } from '@components/custom'
import { modules } from 'global/meta'
import { useRouter } from 'next/dist/client/router'
import React, { HTMLAttributes, useEffect, useState } from 'react'
import { FaChevronCircleLeft } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { useRoute } from 'store/hooks'
import { decrementModuleStep, incrementModuleStep } from 'store/slices'
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
  const mod = modules.find(
    (module) => module.name == router.asPath.split('#')[1]
  )
  const index = mod ? modules.indexOf(mod) : -1

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

const Carousel = ({
  items,
}: {
  moduleIndex: number
  items: { name: string }[]
}) => {
  const { setRoute, moduleStep } = useRoute()
  const dispatch = useDispatch()

  const handleUpStep = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    const foundItem = items.find(
      (item) => item.name === e.currentTarget.innerText
    )
    const itemIndex = foundItem ? items.indexOf(foundItem) : -1

    dispatch(incrementModuleStep(itemIndex))
    return setRoute(`/modules/${modules[itemIndex].name}`)
  }

  const handleDownStep = () => {
    if (moduleStep > 0) {
      dispatch(decrementModuleStep())
      return setRoute(`/modules/${modules[moduleStep - 1].name}`)
    }
  }

  return (
    <section
      className="flex items-center select-none pl-2"
      style={{ width: '30rem' }}
    >
      <a className="z-10 cursor-pointer">
        <FaChevronCircleLeft onClick={() => handleDownStep()} />
      </a>
      <figure className="overflow-hidden z-0 flex-1">
        <div
          className="whitespace-nowrap duration-150 ease-in"
          style={{ transform: `translateX(-${moduleStep * 33}%)` }}
        >
          {items.map((item) => {
            return (
              <CarouselItem
                key={item.name}
                className={
                  items[moduleStep].name !== item.name
                    ? 'opacity-70'
                    : 'font-semibold'
                }
                onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                  handleUpStep(e)
                }
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

import { HTMLAttributes } from 'react'

export type ComponentWithChildren = { children?: React.ReactNode }

export type AddClassNames<T extends string[]> = Partial<
  Record<T[number], HTMLAttributes<any>['className']>
>

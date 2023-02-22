import clsx from 'clsx'
import React from 'react'
import { PinkLine } from './PinkLine'

type Props = {
  className?: string
  children: React.ReactNode
  line?: boolean
  noStyle?: boolean
}

export const H1: React.FC<Props> = ({ className, children, line, noStyle }) => {
  return (
    <>
      {line && <PinkLine />}
      <h2 className={clsx(className, { 'mt-10 mb-8 text-3xl font-normal sm:text-4xl': !noStyle })}>
        {children}
      </h2>
    </>
  )
}

export const H3: React.FC<Props> = ({ className, noStyle, line, children }) => {
  return (
    <>
      {line && <PinkLine />}
      <h3 className={clsx(className, { 'mt-1 mb-6 text-xl font-bold': !noStyle })}>{children}</h3>
    </>
  )
}

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
      <h2
        className={clsx(className, {
          'mb-5 mt-11 text-3xl font-normal leading-10 sm:text-4xl': !noStyle,
        })}
      >
        {children}
      </h2>
    </>
  )
}

export const H3: React.FC<Props> = ({ className, noStyle, line, children }) => {
  return (
    <>
      {line && <PinkLine />}
      <h3 className={clsx(className, { 'mb-3 mt-5 text-xl font-bold': !noStyle })}>{children}</h3>
    </>
  )
}

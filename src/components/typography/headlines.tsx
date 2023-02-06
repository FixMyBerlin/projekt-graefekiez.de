import clsx from 'clsx'
import React from 'react'

type Props = {
  className?: string
  children: React.ReactNode
}

export const H1: React.FC<Props> = ({ className, children }) => {
  return (
    <h2 className={clsx(className, 'mt-10 mb-8 text-3xl font-normal sm:text-4xl')}>{children}</h2>
  )
}

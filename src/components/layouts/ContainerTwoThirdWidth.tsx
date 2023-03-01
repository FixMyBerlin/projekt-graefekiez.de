import clsx from 'clsx'
import React from 'react'

type Props = {
  className?: string
  children: React.ReactNode
}

export const ContainerTwoThirdWidth: React.FC<Props> = ({ className, children }) => {
  return <div className={clsx(className, 'md:w-2/3')}>{children}</div>
}

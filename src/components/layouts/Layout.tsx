import React from 'react'
import { TailwindResponsiveHelper } from '../TailwindResponsiveHelper/TailwindResponsiveHelper'

type Props = {
  children?: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <TailwindResponsiveHelper />
    </>
  )
}

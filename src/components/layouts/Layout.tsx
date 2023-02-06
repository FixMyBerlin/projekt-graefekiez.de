import React from 'react'
import { TailwindResponsiveHelper } from '../TailwindResponsiveHelper/TailwindResponsiveHelper'
import { Footer } from './Footer'

type Props = {
  children?: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
      <TailwindResponsiveHelper />
    </>
  )
}

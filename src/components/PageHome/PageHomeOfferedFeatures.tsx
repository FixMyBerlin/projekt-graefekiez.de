import React from 'react'
import { Tabs } from '../OfferedFeatures/Tabs'

import { H1 } from '../typography'

export const PageHomeOfferedFeatures: React.FC = () => {
  return (
    <section id="angebote" className="scroll-mt-10">
      <H1 className="mb-2">Angebote für alle Anwohnenden</H1>

      <Tabs />
    </section>
  )
}

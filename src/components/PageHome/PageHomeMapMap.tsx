import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { buttonStyle } from '../links'

export const PageHomeMapMap: React.FC = () => {
  return (
    <section className="">
      <StaticImage src="./assets/PageHomeMap/karte-platzhalter.jpg" alt="" />

      <nav className="mt-4 space-x-2 bg-gray-300 p-4">
        {/* TODO: Anschauen dafür https://tailwindui.com/components/application-ui/forms/radio-groups#component-245cb777f4a9823e97d8b1c2dfb87e0c */}
        <button type="button" className={buttonStyle}>
          Parkmöglichkeiten
        </button>
        <button type="button" className={buttonStyle}>
          Jelbi-Stationen
        </button>
        <button type="button" className={buttonStyle}>
          Lieferzonen
        </button>
        <button type="button" className={buttonStyle}>
          Neunutzungen
        </button>
      </nav>
    </section>
  )
}

import React from 'react'
import { H1, Prose } from '../typography'

export const PageHomeMapText: React.FC = () => {
  return (
    <section className="mb-10">
      <H1>Was genau passiert 2023 im Kiez?</H1>
      <Prose>
        <p>
          Auf der interaktiven Karte sehen Sie alle Planungen für die kommenden Monate. Sie können
          die einzelnen Themen ein- oder ausblenden.
        </p>
      </Prose>
    </section>
  )
}

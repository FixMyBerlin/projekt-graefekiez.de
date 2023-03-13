import React from 'react'
import { Card, CardCta, CardDescription, CardEyebrow, CardTitle } from './Card'

export type NewsItemProps = {
  slug?: string
  title: string
  date: string
  body?: React.ReactNode | string
}

function formatDate(dateString: string) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export const NewsItem: React.FC<NewsItemProps> = ({ slug, title, date, body }) => {
  return (
    <Card as="article">
      <CardTitle href={slug ? `/aktuelles/${slug}` : undefined}>{title}</CardTitle>
      <CardEyebrow as="time" dateTime={date} decorate>
        {formatDate(date)}
      </CardEyebrow>
      {body && <CardDescription>{body}</CardDescription>}
      {slug && <CardCta>Weiterlesen…</CardCta>}
    </Card>
  )
}

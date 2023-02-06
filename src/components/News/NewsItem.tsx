import React from 'react'
import { Card, CardCta, CardDescription, CardEyebrow, CardTitle } from './Card'

export type NewsItemProps = {
  slug?: string
  title: string
  date: string
  children: string
}

function formatDate(dateString: string) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export const NewsItem: React.FC<NewsItemProps> = ({ slug: _, title, date, children }) => {
  return (
    <Card as="article">
      {/* <CardTitle href={`/articles/${slug}`}>{title}</CardTitle> */}
      <CardTitle>{title}</CardTitle>
      <CardEyebrow as="time" dateTime={date} decorate>
        {formatDate(date)}
      </CardEyebrow>
      <CardDescription>{children}</CardDescription>
      {/* <CardCta>Mehr erfahren</CardCta> */}
    </Card>
  )
}

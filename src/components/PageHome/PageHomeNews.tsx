import React from 'react'
import { News } from '../News/News'
import { NewsItemProps } from '../News/NewsItem'

const news: NewsItemProps[] = [
  {
    title: 'string',
    date: new Date().toString(),
    children: 'string',
  },
  {
    title: 'string',
    date: new Date().toString(),
    children: 'string',
  },
]

export const PageHomeNews: React.FC = () => {
  return (
    <section>
      <h2 className="mt-10 mb-8 text-xl">Aktuelles</h2>
      <News news={news} />
    </section>
  )
}

import React from 'react'
import { NewsItem, NewsItemProps } from './NewsItem'

type Props = { news: NewsItemProps[] }

export const News: React.FC<Props> = ({ news }) => {
  return (
    <div className="md:border-l md:border-gray-100 md:pl-6">
      <div className="flex max-w-3xl flex-col space-y-16">
        {news.map(({ title, date, children: description }) => {
          return (
            <NewsItem title={title} date={date}>
              {description}
            </NewsItem>
          )
        })}
      </div>
    </div>
  )
}

import React from 'react'
import { NewsItem, NewsItemProps } from './NewsItem'

type Props = { news: NewsItemProps[] }

export const News: React.FC<Props> = ({ news }) => {
  return (
    <div className="flex max-w-3xl flex-col space-y-16">
      {news.map(({ title, date, children: description }, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <NewsItem key={index} title={title} date={date}>
            {description}
          </NewsItem>
        )
      })}
    </div>
  )
}

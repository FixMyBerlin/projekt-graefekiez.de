import React from 'react'
import { News } from '../News/News'
import { NewsItemProps } from '../News/NewsItem'

const news: NewsItemProps[] = [
  {
    title: 'Introducing Animaginary: High performance web animations',
    date: '2023-01-01',
    children:
      'When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.',
  },
  {
    title: 'Rewriting the cosmOS kernel in Rust',
    date: '2023-01-01',
    children:
      'When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language with a lot of benefits, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.',
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

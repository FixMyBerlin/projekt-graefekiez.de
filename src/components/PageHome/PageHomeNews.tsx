import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { NewsItem } from '../News/NewsItem'

export const PageHomeNews: React.FC = () => {
  const data: Queries.HomepageNewsQuery = useStaticQuery(graphql`
    query HomepageNews {
      allMdx(
        sort: { frontmatter: { date: DESC } }
        filter: { frontmatter: { visibleOnHomepage: { eq: true } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              date(formatString: "YYYY-MM-DD")
              slug
              title
            }
          }
        }
        totalCount
      }
    }
  `)

  return (
    <section>
      <h2 className="mt-10 mb-8 text-xl">Aktuelles</h2>
      <div className="flex max-w-3xl flex-col space-y-16">
        {data.allMdx.edges.map((edge) => {
          const { frontmatter, id } = edge.node
          if (!frontmatter?.slug || !frontmatter?.title || !frontmatter?.date) return null

          return (
            <NewsItem
              key={id}
              slug={frontmatter.slug}
              title={frontmatter.title}
              date={frontmatter.date}
            />
          )
        })}
      </div>
    </section>
  )
}

import { graphql, HeadFC, PageProps } from 'gatsby'
import React from 'react'
import { Layout, MetaTags } from '~/components/layouts'
import { Container } from '~/components/layouts/Container'
import { Hero } from '~/components/layouts/Hero/Hero'
import { NewsItem } from '~/components/News/NewsItem'

const AktuellesPage: React.FC<PageProps<Queries.NewsQuery>> = ({
  data: {
    allMdx: { edges },
  },
}) => {
  return (
    <Layout>
      <Hero title="Aktuelles" subtitle="Neuigkeiten und Termine" />
      <Container colorClass="bg-white mx-auto max-w-prose">
        <div className="mt-8 flex max-w-3xl flex-col space-y-16">
          {edges.map((edge, index) => {
            const { frontmatter } = edge.node
            if (!frontmatter?.slug || !frontmatter?.title || !frontmatter?.date) return null

            return (
              <NewsItem
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                slug={frontmatter.slug}
                title={frontmatter.title}
                date={frontmatter.date}
              />
            )
          })}
        </div>
      </Container>
    </Layout>
  )
}

export default AktuellesPage

export const Head: HeadFC = () => <MetaTags title="Aktuelles" />

export const pageQuery = graphql`
  query News {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { visible: { eq: true } } }
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
`

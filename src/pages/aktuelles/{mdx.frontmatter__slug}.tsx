import { graphql, HeadFC, PageProps } from 'gatsby'
import React from 'react'
import { Layout, MetaTags } from '~/components/layouts'
import { Container } from '~/components/layouts/Container'
import { Hero } from '~/components/layouts/Hero/Hero'
import { NewsItem } from '~/components/News/NewsItem'
import { Prose } from '~/components/typography'

const NewsPostPage: React.FC<PageProps<Queries.NewsPostQuery>> = ({ data, children }) => {
  if (!data.mdx?.frontmatter?.title || !data.mdx?.frontmatter?.date) {
    return (
      <Prose>
        Not found:
        <pre>{JSON.stringify({ data }, undefined, 2)}</pre>
      </Prose>
    )
  }

  return (
    <Layout>
      <Hero title="Aktuelles" subtitle="Neuigkeiten und Termine" />
      <Container colorClass="bg-white mx-auto max-w-prose">
        <div className="mt-8">
          <NewsItem
            title={data.mdx.frontmatter.title}
            date={data.mdx.frontmatter.date}
            body={children}
          />
        </div>
      </Container>
    </Layout>
  )
}

export default NewsPostPage

export const Head: HeadFC = () => <MetaTags title="Aktuelles" noindex />

export const pageQuery = graphql`
  query NewsPost($id: String!) {
    mdx(id: { eq: $id }, frontmatter: { visible: { eq: true } }) {
      id
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`

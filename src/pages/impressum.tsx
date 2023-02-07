import { HeadFC, PageProps } from 'gatsby'
import React from 'react'
import { Layout, MetaTags } from '~/components/layouts'
import { Container } from '~/components/layouts/Container'
import { Hero } from '~/components/layouts/Hero/Hero'
import { H1, Prose } from '~/components/typography'

const ImprintPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero title="Impressum" subtitle="Foo" />
      <Container colorClass="bg-white mx-auto max-w-prose">
        <H1>Foo</H1>
        <Prose>
          <p>TODO</p>
        </Prose>
      </Container>
    </Layout>
  )
}

export default ImprintPage

export const Head: HeadFC = () => <MetaTags title="Impressum" noindex />

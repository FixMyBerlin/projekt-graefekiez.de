import { HeadFC, PageProps } from 'gatsby'
import React from 'react'
import { Layout, MetaTags } from '~/components/layouts'
import { Container } from '~/components/layouts/Container'
import { Hero } from '~/components/layouts/Hero/Hero'
import { PageHomeFaq } from '~/components/PageHome/PageHomeFaq'

const ForschungPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero title="FAQ" subtitle="Foo" />
      <Container colorClass="bg-white mx-auto max-w-prose">
        <PageHomeFaq />
      </Container>
    </Layout>
  )
}

export default ForschungPage

export const Head: HeadFC = () => <MetaTags title="Forschung" />

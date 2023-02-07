import { HeadFC, PageProps } from 'gatsby'
import React from 'react'
import { Layout, MetaTags } from '~/components/layouts'
import { Container } from '~/components/layouts/Container'
import { Hero } from '~/components/layouts/Hero/Hero'
import { H1, Prose } from '~/components/typography'

const PrivacyPolicyPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero title="Dateschutzerklärung" subtitle="Foo" />
      <Container colorClass="bg-white mx-auto max-w-prose">
        <H1>Foo</H1>
        <Prose>
          <p>TODO</p>
        </Prose>
      </Container>
    </Layout>
  )
}

export default PrivacyPolicyPage

export const Head: HeadFC = () => <MetaTags title="Dateschutzerklärung" noindex />

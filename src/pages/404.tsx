import { HeadFC, PageProps } from 'gatsby'
import React from 'react'
import { Layout, MetaTags } from '~/components/layouts'
import { Container } from '~/components/layouts/Container'
import { Hero } from '~/components/layouts/Hero/Hero'
import { Link } from '~/components/links'
import { H1, Prose } from '~/components/typography'

export const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero title="Seite nicht gefunden" subtitle="404" />
      <Container>
        <Prose className="max-w-full text-center">
          <H1>Leider konnten wir diese Seite nicht finden.</H1>
          <Link button href="/">
            Zur Startseite
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </Prose>
      </Container>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <MetaTags title="Seite nicht gefundne | 404" noindex />

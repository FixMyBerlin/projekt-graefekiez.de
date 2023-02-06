import { HeadFC, PageProps } from 'gatsby'
import React from 'react'
import { Layout, MetaTags } from '~/components/layouts'
import { Container } from '~/components/layouts/Container'
import { Hero } from '~/components/layouts/Hero/Hero'
import { PageHomeCar } from '~/components/PageHome/PageHomeCar'
import { PageHomeInto } from '~/components/PageHome/PageHomeInto'
import { PageHomeMapMap } from '~/components/PageHome/PageHomeMapMap'
import { PageHomeMapText } from '~/components/PageHome/PageHomeMapText'
import { PageHomeNews } from '~/components/PageHome/PageHomeNews'
import { PageHomeOfferedFeatures } from '~/components/PageHome/PageHomeOfferedFeatures'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero title="Projekt Gräfekiez" subtitle="Besser Leben ohne Auto" image={<>todo</>} />
      <Container grid colorClass="bg-yellow-200">
        <div className="col-span-2">
          <PageHomeInto />
        </div>
        <PageHomeNews />
      </Container>

      <Container grid colorClass="bg-yellow-500">
        <PageHomeMapText />
        <div className="col-span-2">
          <PageHomeMapMap />
        </div>
      </Container>

      <Container colorClass="bg-yellow-200">
        <PageHomeCar />
      </Container>

      <Container colorClass="bg-gray-50">
        <PageHomeOfferedFeatures />
      </Container>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <MetaTags title="Homepage" />

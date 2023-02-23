import { HeadFC, PageProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Layout, MetaTags } from '~/components/layouts'
import { Container } from '~/components/layouts/Container'
import { Hero } from '~/components/layouts/Hero/Hero'
import { PageHomeInto } from '~/components/PageHome/PageHomeInto'
import { PageHomeLanduse } from '~/components/PageHome/PageHomeLanduse'
import { PageHomeMapMap } from '~/components/PageHome/PageHomeMapMap'
import { PageHomeMapText } from '~/components/PageHome/PageHomeMapText'
import { PageHomeNews } from '~/components/PageHome/PageHomeNews'
import { PageHomeOfferedFeatures } from '~/components/PageHome/PageHomeOfferedFeatures'
import { PageHomeParking } from '~/components/PageHome/PageHomeParking'
import { PageHomePartner } from '~/components/PageHome/PageHomePartner'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero
        title="Projekt Graefekiez"
        subtitle="Besser Leben ohne Auto"
        titleColor="dark"
        image={
          <StaticImage
            src="../components/PageHome/assets/Hero/hero.jpg"
            alt=""
            className="h-full w-full"
          />
        }
      />
      <Container grid colorClass="bg-yellow-100 pb-12">
        <div className="sm:col-span-2">
          <PageHomeInto />
        </div>
        <div className="sm:mx-auto md:mx-0 md:pl-10">
          <PageHomeNews />
        </div>
      </Container>

      <Container grid colorClass="bg-yellow-300">
        <PageHomeMapText />
        <div className="col-span-2">
          <PageHomeMapMap />
        </div>
      </Container>

      <Container colorClass="bg-yellow-100 pb-12">
        <PageHomeParking />
      </Container>

      <Container colorClass="bg-yellow-300">
        <PageHomeOfferedFeatures />
      </Container>

      <Container colorClass="bg-yellow-100">
        <PageHomeLanduse />
      </Container>

      <Container colorClass="bg-yellow-300 pb-12">
        <PageHomePartner />
      </Container>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <MetaTags title="Homepage" />

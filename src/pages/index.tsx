import { HeadFC, PageProps } from 'gatsby'
import React from 'react'
import { Layout, MetaTags } from '~/components/layouts'
import { Container } from '~/components/layouts/Container'
import { Hero } from '~/components/layouts/Hero/Hero'
import { PageHomeParking } from '~/components/PageHome/PageHomeParking'
import { PageHomeFaq } from '~/components/PageHome/PageHomeFaq'
import { PageHomeInto } from '~/components/PageHome/PageHomeInto'
import { PageHomeLanduse } from '~/components/PageHome/PageHomeLanduse'
import { PageHomeMapMap } from '~/components/PageHome/PageHomeMapMap'
import { PageHomeMapText } from '~/components/PageHome/PageHomeMapText'
import { PageHomeNews } from '~/components/PageHome/PageHomeNews'
import { PageHomeOfferedFeatures } from '~/components/PageHome/PageHomeOfferedFeatures'
import { PageHomePartner } from '~/components/PageHome/PageHomePartner'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero
        title="Projekt Graefekiez"
        subtitle="Besser Leben ohne Auto"
        titleColor="light"
        image={
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
        }
      />
      <Container grid colorClass="bg-yellow-100 pb-12">
        <div className="col-span-2">
          <PageHomeInto />
        </div>
        <div className="pl-10">
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

      <Container colorClass="bg-yellow-100">
        <PageHomeFaq />
      </Container>

      <Container colorClass="bg-yellow-100 pb-12">
        <PageHomePartner />
      </Container>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <MetaTags title="Homepage" />

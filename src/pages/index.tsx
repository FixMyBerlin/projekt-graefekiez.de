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
import { PageHomeStepsOne } from '~/components/PageHome/PageHomeStepsOne'
import { PageHomeStepsTwo } from '~/components/PageHome/PageHomeStepsTwo'

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <Hero
      title="Projekt Graefekiez"
      subtitle="Schrittweise mehr Platz"
      titleColor="dark"
      image={
        <StaticImage
          src="../components/PageHome/assets/Hero/hero.jpg"
          alt=""
          className="h-full w-full"
        />
      }
    />
    <Container grid>
      <div className="sm:col-span-2">
        <PageHomeInto />
      </div>
      <div className="sm:mx-auto md:mx-0 md:pl-10">
        <PageHomeNews />
      </div>
    </Container>

    {/* TODO whole section: evtl refactorn mit 2/3-Container - ist erstmal so bis sich klärt dass Reihenfolge mit News so auf mobile passt - sonst problem mit grid... */}
    <Container grid>
      <div className="sm:col-span-2">
        <PageHomeStepsOne />
      </div>
      <div className="sm:col-span-3">
        <StaticImage
          className="sm:hidden"
          src="./../components/PageHome/assets/PageHomeSteps/schritt-1-mobile.jpg"
          alt="Schematische Darstellung des Kerngebiets („L“)"
        />
        <StaticImage
          className="hidden max-w-5xl sm:block"
          src="./../components/PageHome/assets/PageHomeSteps/schritt-1.jpg"
          alt="Schematische Darstellung des Kerngebiets („L“)"
        />
      </div>
      <div className="sm:col-span-2">
        <PageHomeStepsTwo />
      </div>
      <div className="sm:col-span-3">
        <StaticImage
          className="sm:hidden"
          src="./../components/PageHome/assets/PageHomeSteps/schritt-2-mobile.jpg"
          alt="Zweischrittigkeit“ bzw. Prozessablauf"
        />
        <StaticImage
          className="hidden max-w-5xl sm:block"
          src="./../components/PageHome/assets/PageHomeSteps/schritt-2.jpg"
          alt="Zweischrittigkeit“ bzw. Prozessablauf"
        />
      </div>
      {/* TODO Grafik kommt noch */}
    </Container>

    <Container colorClass="bg-yellow-300">
      <PageHomeMapText />
      <PageHomeMapMap />
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

export default IndexPage

export const Head: HeadFC = () => <MetaTags title="Homepage" />

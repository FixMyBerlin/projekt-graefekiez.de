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
import { PageHomeParking } from '~/components/PageHome/PageHomeParking'
import { PageHomePartner } from '~/components/PageHome/PageHomePartner'
import { PageHomeStepsTwo } from '~/components/PageHome/PageHomeStepsTwo'

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <Hero
      className="sm:hidden"
      title="Projekt Graefekiez"
      subtitle="Schrittweise mehr Platz"
      titleColor="light"
      image={
        <StaticImage
          src="../components/PageHome/assets/Hero/Hero-BG-mobile.jpg"
          alt=""
          className="h-full w-full"
        />
      }
    />
    <Hero
      className="hidden sm:block"
      title="Projekt Graefekiez"
      subtitle="Schrittweise mehr Platz"
      titleColor="light"
      image={
        <StaticImage
          src="../components/PageHome/assets/Hero/Hero-BG-height900.jpg"
          alt=""
          className="h-full w-full"
        />
      }
    />
    <Container grid>
      <div className="sm:mx-auto md:order-last md:mx-0 md:pl-10">
        <PageHomeNews />
      </div>
      <div className="sm:col-span-2">
        <PageHomeInto />
      </div>
    </Container>

    {/* TODO whole section: evtl refactorn mit 2/3-Container - ist erstmal so bis sich klärt dass Reihenfolge mit News so auf mobile passt - sonst problem mit grid... */}
    <Container grid>
      <div className="sm:col-span-3">
        <div className="sm:hidden">
          <StaticImage
            src="./../components/PageHome/assets/PageHomeSteps/Kerngebiet-mobile.jpg"
            alt="Kerngebiet des Projektss (Darstellung: FixMyCity)"
          />
        </div>
        <div className="hidden max-w-5xl sm:block">
          <StaticImage
            src="./../components/PageHome/assets/PageHomeSteps/Illu-Kerngebiet.jpg"
            alt="Schematische Darstellung des Kerngebiets („L“)"
          />
        </div>
        <p className="mt-2 text-sm">Abb. 1: Kerngebiet des Projektss (Darstellung: FixMyCity)</p>
      </div>
      <div className="sm:col-span-2">
        <PageHomeStepsTwo />
        <p className="mt-2 text-sm">
          {/* Abb 2 ? */}
          {/* Abb. 2: So funktionieren die Bausteine miteinander (Darstellung: paper planes e.V.) */}
        </p>
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

    <Container>
      <PageHomeLanduse />
    </Container>

    <Container colorClass="pb-12">
      <PageHomePartner />
    </Container>
  </Layout>
)

export default IndexPage

export const Head: HeadFC = () => <MetaTags title="Homepage" />

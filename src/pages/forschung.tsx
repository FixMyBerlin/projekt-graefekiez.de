import { HeadFC, PageProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Layout, MetaTags } from '~/components/layouts'
import { Container } from '~/components/layouts/Container'
import { Hero } from '~/components/layouts/Hero/Hero'
import { PageForschungTimeline } from '~/components/PageForschung/PageForschungTimeline'
import { Quote } from '~/components/Quote/Quote'
import { H1, Prose } from '~/components/typography'

const ForschungPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero title="Forschung" subtitle="Warum gibt es dieses Projekt überhaupt?" />
      <Container colorClass="bg-white mx-auto max-w-prose">
        <H1>Autofrei im Kiez Mobil - Was soll das alles?</H1>
        <Prose>
          <p>
            In den Straßen von Friedrichshain-Kreuzberg unterwegs zu sein ist oft mit sehr viel
            Stress verbunden. Das liegt nicht zuletzt daran, daß der Autoverkehr in den vergangenen
            Jahren extrem zugenommen hat. Als Bezirk (?) wollen wir für die Entspannung dieser
            Situation sorgen – speziell in den Wohnvierteln.Das liegt nicht zuletzt daran, daß der
            Autoverkehr in den vergangenen Jahren extrem zugenommen hat. Als Bezirk (?) wollen wir
            für die Entspannung dieser Situation sorgen – speziell in den Wohnvierteln.
          </p>
        </Prose>
        <div className="max-w-prose">
          <Quote
            author="Andreas Knie – WZB"
            quote="Kaninchen gibt es nur in meinem Garten. EIn Auto braucht kein Mensch. In 6 Monaten wollen wir es gemeinsam mit Ihnen herausfinden."
            image={
              <StaticImage
                src="../components/PageForschung/assets/andreas-knie.jpg"
                alt=""
                // height={320}
                // className="h-12 w-12 lg:h-64 lg:w-64 xl:h-80 xl:w-80"
              />
            }
          />
        </div>
      </Container>
      <Container colorClass="bg-white pb-12 max-w-prose mx-auto">
        <PageForschungTimeline />
      </Container>
    </Layout>
  )
}

export default ForschungPage

export const Head: HeadFC = () => <MetaTags title="Homepage" />

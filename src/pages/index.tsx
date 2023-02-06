import { HeadFC, PageProps } from 'gatsby'
import React from 'react'
import { Layout, MetaTags } from '~/components/layouts'
import { Hero } from '~/components/layouts/Hero/Hero'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero title="Projekt Gräfekiez" subtitle="Besser Leben ohne Auto" image={<>todo</>} />
      <section className="flex gap-3">Hallo Gräfekiez</section>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <MetaTags title="Homepage" />

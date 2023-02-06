import { HeadFC, PageProps } from 'gatsby'
import React from 'react'
import { Layout, MetaTags } from '~/components/layouts'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <section className="flex gap-3">Hallo Gräfekiez</section>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <MetaTags title="Homepage" />

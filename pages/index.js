import Head from 'next/head'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Header from '../components/header'

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[1]?.node
  const morePosts = edges.slice(0)

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Awanpc Blog</title>
        </Head>
        <Header></Header>
        <Container>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
  }
}

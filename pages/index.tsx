import Head from 'next/head'
import Container from '../src/components/container'
import HeroPost from '../src/components/hero-post'
import Intro from '../src/components/intro'
import Layout from '../src/components/layout'
import MoreStories from '../src/components/more-stories'
import { IallPosts } from '../src/interfaces'
import { CMS_NAME } from '../src/lib/constants'
import { getAllPosts } from '../src/lib/api'

export default function Index({ allPosts }: { allPosts: Array<IallPosts> }) {
    const heroPost = allPosts[0]
    const morePosts = allPosts.slice(1)
    return (
        <>
            <Layout>
                <Head>
                    <title>Next.js Blog Example with {CMS_NAME}</title>
                </Head>
                <Container>
                    <Intro />
                    {heroPost && (
                        <HeroPost
                            title={heroPost.title}
                            coverImage={heroPost.coverImage}
                            date={heroPost.date}
                            author={heroPost.author}
                            slug={heroPost.slug}
                            excerpt={heroPost.excerpt}
                        />
                    )}
                    {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
    ])

    return {
        props: { allPosts },
    }
}

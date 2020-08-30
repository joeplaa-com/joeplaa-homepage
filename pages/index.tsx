import Container from '../src/components/container'
import HeroPost from '../src/components/hero-post'
import Intro from '../src/components/intro'
import Layout from '../src/components/layout'
import MoreStories from '../src/components/more-stories'
import { IallPostsProps } from '../src/interfaces'
import { getAllPosts } from '../src/lib/api'

export default function Index({ allPosts }: { allPosts: Array<IallPostsProps> }) {
    const heroPost = allPosts[0]
    const morePosts = allPosts.slice(1)
    return (
        <>
            <Layout siteDescription={heroPost.excerpt} siteTitle={heroPost.title} >
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

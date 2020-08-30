import { useState, useEffect, useMemo } from 'react'
import { useForm, usePlugin } from 'tinacms'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Container from '../../src/components/container'
import PostBody from '../../src/components/post-body'
import Header from '../../src/components/header'
import PostHeader from '../../src/components/post-header'
import Layout from '../../src/components/Layout'
import { IPostProps } from '../../src/interfaces'
import { getPostBySlug, getAllPosts } from '../../src/lib/api'
import PostTitle from '../../src/components/post-title'
import { CMS_NAME } from '../../src/lib/constants'
import markdownToHtml from '../../src/lib/markdownToHtml'

export default function Post({ post: initialPost, morePosts, preview }: IPostProps) {
    const router = useRouter()
    if (!router.isFallback && !initialPost?.slug) {
        return <ErrorPage statusCode={404} />
    }

    const formConfig = {
        id: initialPost.slug,
        label: 'Blog Post',
        initialValues: initialPost,
        onSubmit: (values) => {
            alert(`Submitting ${values.title}`)
        },
        fields: [
            {
                name: 'title',
                label: 'Post Title',
                component: 'text',
            },
            {
                name: 'rawMarkdownBody',
                label: 'Content',
                component: 'markdown',
            },
        ],
    }

    const [post, form] = useForm(formConfig)
    usePlugin(form)

    const [htmlContent, setHtmlContent] = useState(post.content)
    const initialContent = useMemo(() => post.rawMarkdownBody, [])
    useEffect(() => {
        if (initialContent == post.rawMarkdownBody) return
        markdownToHtml(post.rawMarkdownBody).then(setHtmlContent)
    }, [post.rawMarkdownBody])

    return (
        <Layout preview={preview}>
            <Container>
                <Header />
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                    <>
                        <article className="mb-32">
                            <Head>
                                <title>
                                    {post.title} | Next.js Blog Example with {CMS_NAME}
                                </title>
                                <meta property="og:image" content={post.ogImage.url} />
                            </Head>
                            <PostHeader
                                title={post.title}
                                coverImage={post.coverImage}
                                date={post.date}
                                author={post.author}
                            />
                            <PostBody content={htmlContent} />
                        </article>
                    </>
                )}
            </Container>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
    ])
    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
                rawMarkdownBody: post.content,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((posts) => {
            return {
                params: {
                    slug: posts.slug,
                },
            }
        }),
        fallback: false,
    }
}

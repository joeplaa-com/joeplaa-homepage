import { useState, useEffect, useMemo } from 'react'
import { useCMS, useForm, usePlugin } from 'tinacms'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { Container } from 'reactstrap'
import PostBody from '../../src/components/post-body'
import PostHeader from '../../src/components/post-header'
import Layout from '../../src/components/layout'
import { IPostProps, IallPostsProps } from '../../src/interfaces'
import { getPostBySlug, getAllPosts } from '../../src/lib/api'
import PostTitle from '../../src/components/post-title'
import { data, siteInfo } from '../../src/lib/data'
import markdownToHtml from '../../src/lib/markdownToHtml'

export default function Post({ post: initialPost, preview }: IPostProps) {
    const router = useRouter()
    if (!router.isFallback && !initialPost?.slug) {
        return <ErrorPage statusCode={404} />
    }

    const cms = useCMS()
    const [editorRegistered, setEditorRegistered] = useState(false)

    useEffect(() => {
        if (!editorRegistered && cms.enabled) {
            import('react-tinacms-editor').then(({ MarkdownFieldPlugin, HtmlFieldPlugin }) => {
                cms.plugins.add(MarkdownFieldPlugin)
                cms.plugins.add(HtmlFieldPlugin)
                setEditorRegistered(true)
            })
        }
    }, [cms.enabled])

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
                {router.isFallback
                    ? (
                        <PostTitle>{data.Loading}</PostTitle>
                    )
                    : (
                        <>
                            <article className="mb-32">
                                <Head>
                                    <title>
                                        {post.title}{siteInfo.PageTitle}
                                    </title>
                                    <meta property="og:image" content={post.ogImage.url} />
                                </Head>
                                <PostHeader
                                    title={post.title}
                                    coverImage={post.coverImage}
                                    date={post.date}
                                    author={post.author}
                                    slug={post.slug}
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
    ]) as IallPostsProps
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
        paths: posts.map((posts: IallPostsProps) => {
            return {
                params: {
                    slug: posts.slug,
                },
            }
        }),
        fallback: false,
    }
}

import React, { lazy, Suspense, useState } from 'react'
import Img from 'gatsby-image/withIEPolyfill'
import { Button, Card, CardBody, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { FaTimes } from 'react-icons/fa'
const PostBody = lazy(() => import('./postBody'))
const PostImage = lazy(() => import('./postImage'))
const PostSubtitle = lazy(() => import('./postSubtitle'))
const PostTitle = lazy(() => import('./postTitle'))
import RenderLoader from './renderLoader'
import { content } from '../utils/data'
import { PortfolioEntryProps } from '../types'

export default function PortfolioPreview({ body, fields, frontmatter }: PortfolioEntryProps) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const isSSR = typeof window === "undefined";

    return (
        <>
            <Card>
                {!isSSR && (
                    <Suspense fallback={<RenderLoader />}>
                        <CardBody>
                            <PostTitle path={false} onClick={toggle} slug={fields.slug} title={frontmatter.title} />
                            <PostImage path={false} onClick={toggle} slug={fields.slug} title={frontmatter.title} picture={frontmatter.cover.childImageSharp} rounded={true} height={180} />
                            <PostSubtitle className='mt-3' date={frontmatter.date} tags={frontmatter.tags} />
                        </CardBody>
                    </Suspense>
                )}
            </Card>
            <Modal isOpen={modal} toggle={toggle} size='lg'>
                <ModalHeader className='modal-background' toggle={toggle}>{frontmatter.title}</ModalHeader>

                <ModalBody>
                    <Img fluid={frontmatter.cover.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt={'Cover Image for ' + frontmatter.title} className='img-fluid rounded' />
                </ModalBody>

                <ModalBody>
                    {!isSSR && (
                        <Suspense fallback={<RenderLoader />}>
                            <PostBody content={body} />
                        </Suspense>
                    )}
                </ModalBody>

                <ModalFooter className='modal-background'>
                    <Button color="primary" outline onClick={toggle}>
                        <FaTimes />
                        <span>{' '}{content.BacktoPortfolio}</span>
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}
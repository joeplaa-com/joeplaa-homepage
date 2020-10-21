import React, { useState } from 'react'
import Img from 'gatsby-image/withIEPolyfill'
import { Button, Card, CardBody, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { FaTimes } from 'react-icons/fa'
import PostBody from './postBody'
import PostImage from './postImage'
import PostSubtitle from './postSubtitle'
import PostTitle from './postTitle'
import { content } from '../utils/data'
import { PortfolioEntryProps } from '../types'

export default function PortfolioPreview({ body, fields, frontmatter }: PortfolioEntryProps) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

    return (
        <>
            <Card>
                <CardBody>
                    <PostTitle path={false} onClick={toggle} slug={fields.slug} title={frontmatter.title} />
                    <PostImage path={false} onClick={toggle} slug={fields.slug} title={frontmatter.title} picture={frontmatter.cover.childImageSharp} rounded={true} height={180} />
                    <PostSubtitle className='mt-3' date={frontmatter.date} tags={frontmatter.tags} />
                </CardBody>
            </Card>
            <Modal isOpen={modal} toggle={toggle} size='lg'>
                <ModalHeader className='modal-background' toggle={toggle} close={closeBtn}>{frontmatter.title}</ModalHeader>

                <ModalBody>
                    <Img fluid={frontmatter.cover.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt={'Cover Image for ' + frontmatter.title} className='img-fluid rounded' />
                </ModalBody>

                <ModalBody>
                    <PostBody content={body} />
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" outline onClick={toggle}>
                        <FaTimes />
                        <span>{' '}{content.BacktoPortfolio}</span>
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}
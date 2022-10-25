import React, { ReactElement, useState } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Button, Card, CardBody, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { MdClose } from 'react-icons/md';
import PostBody from './postBody';
import PostImage from './postImage';
import PostSubtitle from './postSubtitle';
import PostTitle from './postTitle';
import { content } from '../utils/content';
import { PortfolioEntryProps } from '../typescript';

export default function PortfolioPreview({ body, fields, frontmatter }: PortfolioEntryProps): ReactElement {
    const [modal, setModal] = useState(false);
    const toggle = (): void => setModal(!modal);
    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

    return <>
        <Card className=' h-100'>
            <CardBody>
                <PostTitle path={false} onClick={toggle} slug={fields.slug} title={frontmatter.title} />
                <PostImage path={false} onClick={toggle} slug={fields.slug} title={frontmatter.title} picture={frontmatter.cover.childImageSharp} rounded={true} height={180} />
                <PostSubtitle className='mt-3' date={frontmatter.date} tags={frontmatter.tags} />
            </CardBody>
        </Card>
        <Modal isOpen={modal} toggle={toggle} size='lg'>
            <ModalHeader className='modal-background' toggle={toggle} close={closeBtn}>{frontmatter.title}</ModalHeader>

            <ModalBody>
                <GatsbyImage
                    image={frontmatter.cover.childImageSharp.gatsbyImageData}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt={'Cover Image for ' + frontmatter.title}
                    className='img-fluid rounded' />
            </ModalBody>

            <ModalBody>
                <PostBody content={body} />
            </ModalBody>

            <ModalFooter>
                <Button color="primary" outline onClick={toggle}>
                    <MdClose />
                    <span>{' '}{content.BacktoPortfolio}</span>
                </Button>
            </ModalFooter>
        </Modal>
    </>;
}

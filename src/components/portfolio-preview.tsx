import { useState } from 'react'
import { Button, Card, CardBody, CardSubtitle, CardTitle, CardText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { FaTimes } from 'react-icons/fa'
import Img from 'react-optimized-image'
import DateFormater from './date-formater'
import PortfolioImage from './portfolio-image'
import Tag from './tag'
import { data } from '../lib/data'
import getTags from '../lib/getTags'
import { images } from '../lib/images'
import { PostTypeProps } from '../types'

export default function PortfolioPreview({
    title,
    content,
    coverImage,
    date,
    excerpt,
    slug,
    tags,
    page
}: PostTypeProps) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <div>
            <Card>
                <CardBody>
                    <div className='mb-2'>
                        <PortfolioImage slug={slug} title={title} picture={coverImage} rounded={true} onClick={toggle} />
                    </div>

                    <CardTitle>
                        <h3>
                            <a href="#" onClick={toggle}>{title}</a>
                        </h3>
                    </CardTitle>

                    <CardSubtitle className='mb-2'>
                        <em><DateFormater dateString={date} /></em>
                        <span className='tags'>
                            {getTags(tags).map((tag) => (
                                <Tag key={tag.value} tag={tag} page={page} />
                            ))}
                        </span>
                    </CardSubtitle>

                    <CardText>{excerpt}</CardText>
                </CardBody>
            </Card>
            <Modal isOpen={modal} toggle={toggle} size='lg'>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>

                <ModalBody>
                    <img
                        src={images[coverImage]}
                        alt={'Cover Image for' + title}
                        className='img-fluid rounded'
                    />
                </ModalBody>

                <ModalBody>
                    {content}
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        <FaTimes />
                        <span>{' '}{data.BacktoPortfolio}</span></Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

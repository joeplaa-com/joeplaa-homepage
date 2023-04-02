import React, { ReactElement, useState } from 'react';
import { Container, Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import { SectionProps } from '../typescript';
import { content } from '../data/content';
import NewTabLink from './newTabLink';
import { metadata, urls } from '../data/metadata';

const ShopComponent = ({ className }: SectionProps): ReactElement => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <section className={className} id={metadata.componentShopTitle}>
            <Container className='mb-3 mt-3'>
                <Card className='mb-3'>
                    <CardBody className='d-flex flex-column justify-content-between'>
                        <Row>
                            <Col>
                                <h2>{content.Webshop}</h2>
                            </Col>
                            <Col className='d-flex justify-content-end'>
                                <Button color='primary' onClick={(): void => setIsOpen(true)}>{content.ShippingInfo}</Button>
                            </Col>
                        </Row>
                        <div>
                            <iframe
                                title='joeplaa-shop'
                                style={{ height: '60vh', width: '100%', border: '0px solid black' }}
                                src='https://shop.jodibeauty.com/embed?salon=joeplaa'>
                            </iframe>
                        </div>
                        <p>{content.WebshopExample} <NewTabLink href={urls.external.jodibooks}>jodibooks.com</NewTabLink>. Alternatively checkout my <NewTabLink href='https://tweakers.net/gallery/576659/aanbod/'>Tweakers.net</NewTabLink> or <NewTabLink href='https://www.marktplaats.nl/u/joeplaa/13506734/'>Marktplaats</NewTabLink> account.</p>
                    </CardBody>
                </Card>
            </Container>
            <Modal isOpen={isOpen}>
                <ModalHeader toggle={(): void => setIsOpen(false)}>{content.ShippingInfo}</ModalHeader>
                <ModalBody>
                    <ol>
                        <li>{content.WebshopPayments}</li>
                        <li>{content.WebshopShippingExplanationNL}</li>
                        <li>{content.WebshopShippingExplanationBE}</li>
                    </ol>
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' onClick={(): void => setIsOpen(false)}>{content.Close}</Button>
                </ModalFooter>
            </Modal>
        </section >
    );
};

export default ShopComponent;

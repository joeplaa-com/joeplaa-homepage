import React, { ReactElement, useState } from 'react';
import { Container, Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import useSiteMetadata from '../hooks/useSiteMetadata';
import useSiteUrls from '../hooks/useSiteUrls';
import { SectionProps } from '../typescript';
import { content } from '../data/content';
import NewTabLink from './newTabLink';

const ShopComponent = ({ className }: SectionProps): ReactElement => {
    const { componentShopTitle } = useSiteMetadata();
    const { jodibooks } = useSiteUrls();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <section className={className} id={componentShopTitle}>
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
                        <p>{content.WebshopExample} <NewTabLink href={jodibooks}>jodibooks.com</NewTabLink>.</p>
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

import React, { ReactElement } from 'react';
import { Container, Card, CardBody, Row, Col } from 'reactstrap';
import { SectionProps } from '../typescript';
import { content } from '../data/content';
import { metadata } from '../data/metadata';
import NewTabLink from './newTabLink';

const ShopComponent = ({ className }: SectionProps): ReactElement => {
    return (
        <section className={className} id={metadata.componentShopTitle}>
            <Container className='mb-3 mt-3'>
                <Card className='mb-3'>
                    <CardBody className='d-flex flex-column justify-content-between'>
                        <Row>
                            <Col>
                                <h2>{content.FamilyTree}</h2>
                            </Col>
                        </Row>
                        <div>
                            <iframe
                                title='van de Laarschot family tree at Geni.com'
                                src='https://www.geni.com/family-tree/embed/6000000192902650822>'
                                style={{ height: '60vh', width: '100%', border: '0px solid black' }}>
                            </iframe>
                            <div style={{ textAlign: 'center' }}>
                                <NewTabLink href="https://www.geni.com/family-tree/share/6000000192902650822">View more of my tree on Geni.com</NewTabLink>

                                <p>{content.FamilyTreeWIP}</p>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Container>
        </section >
    );
};

export default ShopComponent;

import React, { ReactElement } from 'react';
import { Container, Card, CardBody } from 'reactstrap';
import useSiteMetadata from '../hooks/useSiteMetadata';
import { SectionProps } from '../typescript';
import { content } from '../utils/content';

const ShopComponent = ({ className }: SectionProps): ReactElement => {
    const { componentShopTitle } = useSiteMetadata();
    return (
        <section className={className} id={componentShopTitle}>
            <Container className='mb-3 mt-3'>
                <Card className='mb-3'>
                    <CardBody className='d-flex flex-column justify-content-between'>
                        <h2>{content.Webshop}</h2>
                        <div>
                            <iframe
                                title='joeplaa-shop'
                                style={{ height: '700px', width: '100%', border: '0px solid black' }}
                                src='https://shop.jodibeauty.com/embed?salon=joeplaa'>
                            </iframe>
                        </div>
                    </CardBody>
                </Card>
            </Container>
        </section >
    );
};

export default ShopComponent;

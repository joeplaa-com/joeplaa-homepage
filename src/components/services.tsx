import React, { ReactElement } from 'react';
import { Container, Card, CardBody } from 'reactstrap';
import useSiteMetadata from '../hooks/useSiteMetadata';
import useSiteUrls from '../hooks/useSiteUrls';
import { SectionProps } from '../typescript';
import { content } from '../data/content';
import NewTabLink from './newTabLink';

const ServicesComponent = ({ className }: SectionProps): ReactElement => {
    const { componentServicesTitle } = useSiteMetadata();
    const { jodibooks } = useSiteUrls();
    return (
        <section className={className} id={componentServicesTitle}>
            <Container className='mb-3 mt-3'>
                <Card className='mb-3'>
                    <CardBody className='d-flex flex-column justify-content-between'>
                        <h2>{content.Pricelist}</h2>
                        <div>
                            <iframe
                                title='joeplaa-pricelist'
                                style={{ height: '35vh', width: '100%', border: '0px solid black' }}
                                src='https://pricelist.jodibeauty.com/services/embed?salon=joeplaa'>
                            </iframe>
                        </div>
                        <p>{content.PricelistExample} <NewTabLink href={jodibooks}>jodibooks.com</NewTabLink>.</p>
                    </CardBody>
                </Card>

                <Card className='mb-3'>
                    <CardBody className='d-flex flex-column justify-content-between'>
                        <h2>{content.Services}</h2>
                        <p>At jodiBooks we want to make your life easier by making your calendar, webshop, website and finance as easy and low-maintenance as possible. jodiBooks currently builds software for the beauty industry, specifically for single-owned and operated salons. But if you are not a hairdresser, nail stylist, beautician or barber, please let me (or us) know. We can probably find a way to make it work.</p>
                        <p>As an example I setup a jodiBooks account for myself and configured a pricelist and webshop. My hobby is computers and homelabbing, so I buy a lot of second hand hardware. Some of which I sell again when I don&apos;t need it anymore, hence the webshop.</p>
                        <p>Head over to <NewTabLink href={jodibooks}>jodibooks.com</NewTabLink> to find more info about our software and to try the free demo (currently Dutch only).</p>
                    </CardBody>
                </Card>
            </Container>
        </section>
    );
};

export default ServicesComponent;

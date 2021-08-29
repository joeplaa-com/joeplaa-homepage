import React, { ReactElement } from 'react';
import { Link } from './customLink';
import { Container, Card, CardBody, CardDeck, Table } from 'reactstrap';
import useSiteMetadata from '../hooks/useSiteMetadata';
import useSiteNavigation from '../hooks/useSiteNavigation';
import useSitePricing from '../hooks/useSitePricing';
import { content } from '../utils/content';
import { SectionProps } from '../types';

const Pricing = ({ className }: SectionProps): ReactElement => {
    const { componentPricingTitle } = useSiteMetadata();
    const { services } = useSiteNavigation();
    const { webshopConfig, webshopHosting, websiteDesign, websiteHosting, websiteUpdates, /* computeC1, computeC2, computeC3, */ computeH1, computeH2, computeStorage } = useSitePricing();

    return (
        <section className={className} id={componentPricingTitle}>
            <Container className='mb-3 mt-3'>
                <h1 className='display-1 text-center'>{componentPricingTitle}</h1>
                <p className='text-center'>More information in the <Link to={services}>Services</Link> section</p>
                <CardDeck>
                    <Card>
                        <CardBody className='d-flex flex-column justify-content-start'>
                            <h2>{content.Websites}</h2>
                            <Table striped responsive hover>
                                <colgroup>
                                    <col span={1} style={{ width: '10%' }} />
                                    <col span={1} style={{ width: '60%' }} />
                                    <col span={1} style={{ width: '30%' }} />
                                </colgroup>
                                <thead className='thead-dark'>
                                    <tr>
                                        <th>#</th>
                                        <th>Description</th>
                                        <th>Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">W1</th>
                                        <td>{content.WebsiteDesign} &amp; build</td>
                                        <td>{websiteDesign}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">W2</th>
                                        <td>{content.WebsiteHosting} (per month)</td>
                                        <td>{websiteHosting}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">W3</th>
                                        <td>{content.WebsiteUpdates} (per 15 minutes)</td>
                                        <td>{websiteUpdates}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">W4</th>
                                        <td>{content.WebshopSetup}</td>
                                        <td>{webshopConfig}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">W5</th>
                                        <td>{content.WebshopHosting} (per month)</td>
                                        <td>{webshopHosting}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>

                    {/* <Card>
                        <CardBody className='d-flex flex-column justify-content-start'>
                                <h2>{content.Compute}</h2>
                                <Table striped responsive hover>
                                    <colgroup>
                                        <col span={1} style={{ width: '10%' }} />
                                        <col span={1} style={{ width: '60%' }} />
                                        <col span={1} style={{ width: '30%' }} />
                                    </colgroup>
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th>#</th>
                                            <th>Per hour</th>
                                            <th>Cost</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">C1</th>
                                            <td>Entry: 8vCPU, 32GB RAM</td>
                                            <td>{computeC1}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">C2</th>
                                            <td>Basic: 8vCPU, 64GB RAM</td>
                                            <td>{computeC2}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">C3</th>
                                            <td>Plus: 16vCPU, 64GB RAM</td>
                                            <td>{computeC3}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Table striped responsive hover>
                                    <colgroup>
                                        <col span={1} style={{ width: '10%' }} />
                                        <col span={1} style={{ width: '60%' }} />
                                        <col span={1} style={{ width: '30%' }} />
                                    </colgroup>
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th>#</th>
                                            <th>Per GB - month</th>
                                            <th>Cost</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">S1</th>
                                            <td>Output storage</td>
                                            <td>{computeStorage}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                        </CardBody>
                    </Card> */}

                    <Card>
                        <CardBody className='d-flex flex-column justify-content-start'>
                            <h2>{content.Hosting}</h2>
                            <Table striped responsive hover>
                                <colgroup>
                                    <col span={1} style={{ width: '10%' }} />
                                    <col span={1} style={{ width: '60%' }} />
                                    <col span={1} style={{ width: '30%' }} />
                                </colgroup>
                                <thead className='thead-dark'>
                                    <tr>
                                        <th>#</th>
                                        <th>Per month</th>
                                        <th>Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">H1</th>
                                        <td>CI/CD server + 1 build agent</td>
                                        <td>{computeH1}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">H2</th>
                                        <td>Additional build agent</td>
                                        <td>{computeH2}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Table striped responsive hover>
                                <colgroup>
                                    <col span={1} style={{ width: '10%' }} />
                                    <col span={1} style={{ width: '60%' }} />
                                    <col span={1} style={{ width: '30%' }} />
                                </colgroup>
                                <thead className='thead-dark'>
                                    <tr>
                                        <th>#</th>
                                        <th>Per GB - month</th>
                                        <th>Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">S1</th>
                                        <td>Artifact storage</td>
                                        <td>{computeStorage}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </CardDeck>
            </Container>
        </section>
    );
};

export default Pricing;
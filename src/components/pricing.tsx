import React from 'react'
import { Container, Col, Row, Card, CardBody, CardDeck, Table } from 'reactstrap'
import { content } from '../utils/data'
import { BackgroundProps } from '../types'

const Pricing = ({ backgroundColor }: BackgroundProps) => {
    return (
        <section className={backgroundColor + ' ' + 'section-home'} id={content.Pricing}>
            <Container className='text-center text-md-left my-md-auto mb-3 mt-3'>
                <Row>
                    <Col>
                        <h1 className='display-1'>{content.Pricing}</h1>
                    </Col>
                </Row>
                <CardDeck>
                    <Card>
                        <CardBody>
                            <h2>{content.WebDesign}</h2>
                            <Table striped hover>
                                <thead className='thead-dark'>
                                    <tr>
                                        <th>Option</th>
                                        <th>Website type</th>
                                        <th>Cost</th>
                                        <th>Development time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Static</td>
                                        <td>&euro; 500</td>
                                        <td>1 week</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Dynamic</td>
                                        <td>&euro; 750</td>
                                        <td>1 week</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>CMS</td>
                                        <td>&euro; 750</td>
                                        <td>4 weeks</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Custom</td>
                                        <td>&euro; 1000+*</td>
                                        <td>2 weeks+*</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <em>*Depending on requirements</em>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <h2>{content.WebHosting}</h2>
                            <Table striped hover>
                                <thead className='thead-dark'>
                                    <tr>
                                        <th>Option</th>
                                        <th>Website type</th>
                                        <th>Costs per month</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Static</td>
                                        <td>&euro; 5</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Dynamic</td>
                                        <td>&euro; 10</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>CMS</td>
                                        <td>Not available</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </CardDeck>
            </Container>
        </section >
    );
}

export default Pricing;
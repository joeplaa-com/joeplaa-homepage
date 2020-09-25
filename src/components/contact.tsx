import React from 'react'
import { Button, Container, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap'
import NewTabLink from './newTabLink'
import { data, urls } from '../utils/data'
import { PricingProps } from '../types'

const Contact = (props: PricingProps) => {
    const { backgroundColor } = props;
    return (
        <section className={backgroundColor + ' ' + 'section-home markdown'} id={data.Contact}>
            <Container className='text-center text-md-left my-md-auto mb-3 mt-3'>
                <Row>
                    <Col>
                        <h1 className='display-1'>{data.Contact}</h1>
                    </Col>
                </Row>
                <Row className='mt-3 d-flex flex-column justify-content-between align-items-center'>
                    <Col className='col-12 col-sm-10 col-md-8 col-lg-6'>
                        <h2>{data.SendEmail}</h2>
                        <Form>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="text" name="name" id="name" placeholder="Name" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="business-name">Business name</Label>
                                <Input type="text" name="business-name" id="business-name" placeholder="Business name" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="name@email.com" />
                            </FormGroup>
                            <Row>
                                <Col>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" /> Check me out
                                </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" /> Check me out
                                </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" /> Check me out
                                </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" /> Check me out
                                </Label>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" /> Check me out
                                </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" /> Check me out
                                </Label>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="exampleText">Text Area</Label>
                                <Input type="textarea" name="text" id="exampleText" />
                            </FormGroup>
                            <Button color='secondary'>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section >
    );
}

export default Contact;
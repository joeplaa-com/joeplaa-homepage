import React, { useState } from 'react'
import { Button, Container, Col, Row, Form, FormFeedback, FormGroup, Label, Input } from 'reactstrap'
import { data, urls } from '../utils/data'
import validateEmail from '../utils/validateEmail'
import { BackgroundProps } from '../types'

const Contact = ({ backgroundColor }: BackgroundProps) => {
    // form validation errors
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    // form to state
    const [name, setName] = useState('');
    const [business, setBusiness] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [staticDesign, setStaticDesign] = useState(false);
    const [dynamicDesign, setDynamicDesign] = useState(false);
    const [cmsDesign, setCMSDesign] = useState(false);
    const [customDesign, setCustomDesign] = useState(false);
    const [staticHosting, setStaticHosting] = useState(false);
    const [dynamicHosting, setDynamicHosting] = useState(false);
    const [captcha, setCaptcha] = useState(false);

    function resetForm() {
        setName('');
        setBusiness('');
        setEmail('');
        setMessage('');
        setStaticDesign(false);
        setDynamicDesign(false);
        setCMSDesign(false);
        setCustomDesign(false);
        setStaticHosting(false);
        setDynamicHosting(false);
        setCaptcha(false);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const state = {
            name: name,
            business: business,
            email: email,
            message: message,
            staticDesign: staticDesign,
            dynamicDesign: dynamicDesign,
            cmsDesign: cmsDesign,
            customDesign: customDesign,
            staticHosting: staticHosting,
            dynamicHosting: dynamicHosting
        }
        if (!captcha) {
            fetch(urls.sendMailApi, {
                method: 'POST',
                body: JSON.stringify(state),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                if (response.ok) {
                    alert(data.MailSendSuccess);
                } else {
                    alert(data.MailSendFailed + urls.email);
                }
            });
        };
        resetForm();
    }

    const checkNameError = () => {
        if (!name) {
            setNameError(true);
        } else {
            setNameError(false);
        };
    };

    const checkEmailError = () => {
        if (!validateEmail(email)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        };
    };

    return (
        <section className={backgroundColor + ' ' + 'section-home'} id={data.Contact}>
            <Container className='text-center text-md-left my-md-auto mb-3 mt-3'>
                <Row>
                    <Col>
                        <h1 className='display-1'>{data.Contact}</h1>
                    </Col>
                </Row>
                <Row className='mt-3 d-flex flex-column justify-content-between align-items-center'>
                    <Col className='col-12 col-sm-10 col-md-8 col-lg-6'>
                        <h2>{data.SendEmail}</h2>
                        <Form id="contact-form" onSubmit={handleSubmit} method="POST">
                            <FormGroup>
                                <Label for="name">{data.Name}</Label>
                                <Input type="text" name="name" id="name" placeholder="John Doe" value={name} onChange={(event) => (setName(event.target.value))} onBlur={checkNameError} invalid={nameError} />
                                <FormFeedback>{data.NameErrorMessage}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="business-name">{data.Business}</Label>
                                <Input type="text" name="business-name" id="business-name" placeholder="ACME" value={business} onChange={(event) => (setBusiness(event.target.value))} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">{data.Email}</Label>
                                <Input type="email" name="email" id="email" placeholder="name@email.com" value={email} onChange={(event) => (setEmail(event.target.value))} onBlur={checkEmailError} invalid={emailError} />
                                <FormFeedback>{data.EmailErrorMessage}</FormFeedback>
                            </FormGroup>

                            <Label>{data.InterestedIn}</Label>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" checked={setStaticDesign || false}
                                        onChange={(event) => (setStaticDesign(event.target.checked))} />Static website (Next.js or Gatsby.js)
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" checked={dynamicDesign || false}
                                        onChange={(event) => (setDynamicDesign(event.target.checked))} />Dynamic website (WordPress)
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" checked={cmsDesign || false}
                                        onChange={(event) => (setCMSDesign(event.target.checked))} />Static website + CMS
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" checked={customDesign || false}
                                        onChange={(event) => (setCustomDesign(event.target.checked))} />Custom website
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" checked={staticHosting || false}
                                        onChange={(event) => (setStaticHosting(event.target.checked))} />Static website hosting
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" checked={dynamicHosting || false}
                                        onChange={(event) => (setDynamicHosting(event.target.checked))} />Dynamic website hosting
                                </Label>
                            </FormGroup>
                            <p></p>
                            <FormGroup>
                                <Label for="other">{data.TextBox}</Label>
                                <Input type="textarea" name="text" id="other" placeholder="I like your website and I want to know more about..." style={{ height: '120px' }} value={message} onChange={(event) => (setMessage(event.target.value))} />
                            </FormGroup>
                            <FormGroup check hidden>
                                <Label check>
                                    <Input type="checkbox" checked={captcha || false}
                                        onChange={(event) => (setCaptcha(event.target.checked))} />
                                </Label>
                            </FormGroup>
                            <Button color='secondary' type="submit">{data.Submit}</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section >
    );
}

export default Contact;
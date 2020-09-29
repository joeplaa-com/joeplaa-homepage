import React from 'react'
import { Button, Container, Col, Row, Form, FormFeedback, FormGroup, Label, Input } from 'reactstrap'
import { content, urls } from '../utils/data'
import validateEmail from '../utils/validateEmail'
import { BackgroundProps } from '../types'

type ContactState = {
    nameError: boolean
    emailError: boolean
    name: string
    business: string
    email: string
    message: string
    staticDesign: boolean
    dynamicDesign: boolean
    cmsDesign: boolean
    customDesign: boolean
    staticHosting: boolean
    dynamicHosting: boolean,
    captcha: boolean
}

const initialState = {
    nameError: false,
    emailError: false,
    name: '',
    business: '',
    email: '',
    message: '',
    staticDesign: false,
    dynamicDesign: false,
    cmsDesign: false,
    customDesign: false,
    staticHosting: false,
    dynamicHosting: false,
    captcha: false
}

export default class Contact extends React.Component<BackgroundProps, ContactState> {
    constructor(props: BackgroundProps) {
        super(props);
        this.state = initialState;
    }

    // reset form after sending email
    resetForm() {
        this.setState(initialState)
    }

    // form validation errors
    checkNameError() {
        if (!this.state.name) {
            this.setState({ nameError: true });
        } else {
            this.setState({ nameError: false });
        }
    }
    checkEmailError() {
        if (!validateEmail(this.state.email)) {
            this.setState({ emailError: true });
        } else {
            this.setState({ emailError: false });
        }
    }

    // check form and send form as email
    checkForm() {
        this.checkNameError();
        this.checkEmailError();
        if (this.state.name.length < 1 && validateEmail(this.state.email)) {
            this.submit();
        }
    }

    submit() {
        if (!this.state.captcha) {
            fetch(`${process.env.GATSBY_URL_MAIL}`, {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                if (response.ok) {
                    alert(content.MailSendSuccess);
                } else {
                    alert(content.MailSendFailed + urls.email);
                }
            });
        }
        this.resetForm();
    }

    // change / update state
    setName(value: string) {
        this.setState({ name: value });
    }
    setBusiness(value: string) {
        this.setState({ business: value });
    }
    setEmail(value: string) {
        this.setState({ email: value });
    }
    setCheck(value: string) {
        switch (value) {
        case 'staticDesign': {
            this.setState({ staticDesign: !this.state.staticDesign }); break;
        }
        case 'dynamicDesign': {
            this.setState({ dynamicDesign: !this.state.dynamicDesign }); break;
        }
        case 'cmsDesign': {
            this.setState({ cmsDesign: !this.state.cmsDesign }); break;
        }
        case 'customDesign': {
            this.setState({ customDesign: !this.state.customDesign }); break;
        }
        case 'staticHosting': {
            this.setState({ staticHosting: !this.state.staticHosting }); break;
        }
        case 'dynamicHosting': {
            this.setState({ dynamicHosting: !this.state.dynamicHosting }); break;
        }
        case 'captcha': {
            this.setState({ captcha: !this.state.captcha }); break;
        }
        }
    }
    setMessage(value: string) {
        this.setState({ message: value });
    }

    render() {
        return (
            <section className={this.props.backgroundColor + ' ' + 'section-home'} id={content.Contact}>
                <Container className='text-center text-md-left my-md-auto mb-3 mt-3'>
                    <Row>
                        <Col>
                            <h1 className='display-1'>{content.Contact}</h1>
                        </Col>
                    </Row>
                    <Row className='mt-3 d-flex flex-column justify-content-between align-items-center'>
                        <Col className='col-12 col-sm-10 col-md-8 col-lg-6'>
                            <h2>{content.SendEmail}</h2>
                            <Form id="contact-form">
                                <FormGroup>
                                    <Label for="name">{content.Name}</Label>
                                    <Input type="text" name="name" id="name" placeholder="John Doe" value={this.state.name} onChange={(e) => (this.setName(e.target.value))} onBlur={this.checkNameError.bind(this)} invalid={this.state.nameError} />
                                    <FormFeedback>{content.NameErrorMessage}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="business-name">{content.Business}</Label>
                                    <Input type="text" name="business-name" id="business-name" placeholder="ACME" value={this.state.business} onChange={(e) => (this.setBusiness(e.target.value))} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleEmail">{content.Email}</Label>
                                    <Input type="email" name="email" id="email" placeholder="name@email.com" value={this.state.email} onChange={(e) => (this.setEmail(e.target.value))} onBlur={this.checkEmailError.bind(this)} invalid={this.state.emailError} />
                                    <FormFeedback>{content.EmailErrorMessage}</FormFeedback>
                                </FormGroup>

                                <Label>{content.InterestedIn}</Label>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" checked={this.state.staticDesign || false}
                                            onChange={() => this.setCheck('staticDesign')} />Static website (Next.js or Gatsby.js)
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" checked={this.state.dynamicDesign || false}
                                            onChange={() => this.setCheck('dynamicDesign')} />Dynamic website (WordPress)
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" checked={this.state.cmsDesign || false}
                                            onChange={() => this.setCheck('cmsDesign')} />Static website + CMS
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" checked={this.state.customDesign || false}
                                            onChange={() => this.setCheck('customDesign')} />Custom website
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" checked={this.state.staticHosting || false}
                                            onChange={() => this.setCheck('staticHosting')} />Static website hosting
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" checked={this.state.dynamicHosting || false}
                                            onChange={() => this.setCheck('dynamicHosting')} />Dynamic website hosting
                                    </Label>
                                </FormGroup>
                                <p></p>
                                <FormGroup>
                                    <Label for="other">{content.TextBox}</Label>
                                    <Input type="textarea" name="text" id="other" placeholder="I like your website and I want to know more about..." style={{ height: '120px' }} value={this.state.message} onChange={(e) => (this.setMessage(e.target.value))} />
                                </FormGroup>
                                <FormGroup check hidden>
                                    <Label check>
                                        <Input type="checkbox" checked={this.state.captcha || false}
                                            onChange={() => this.setCheck('captcha')} />
                                    </Label>
                                </FormGroup>
                                <Button color='secondary' onClick={this.checkForm.bind(this)}>{content.Submit}</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section >
        );
    }
}
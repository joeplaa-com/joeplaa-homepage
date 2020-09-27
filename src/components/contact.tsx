import React from 'react'
import { Button, Container, Col, Row, Form, FormFeedback, FormGroup, Label, Input } from 'reactstrap'
import { data, urls } from '../utils/data'
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
    constructor(props) {
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
            fetch(process.env.GATSBY_URL_MAIL, {
                method: 'POST',
                body: JSON.stringify(this.state),
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
        }
        this.resetForm();
    }

    // change / update state
    setName(event) {
        this.setState({ name: event.target.value });
    }
    setBusiness(event) {
        this.setState({ business: event.target.value });
    }
    setEmail(event) {
        this.setState({ email: event.target.value });
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
        }}
    }
    setMessage(event) {
        this.setState({ message: event.target.value });
    }

    render() {
        console.log(this.state);
        return (
            <section className={this.props.backgroundColor + ' ' + 'section-home'} id={data.Contact}>
                <Container className='text-center text-md-left my-md-auto mb-3 mt-3'>
                    <Row>
                        <Col>
                            <h1 className='display-1'>{data.Contact}</h1>
                        </Col>
                    </Row>
                    <Row className='mt-3 d-flex flex-column justify-content-between align-items-center'>
                        <Col className='col-12 col-sm-10 col-md-8 col-lg-6'>
                            <h2>{data.SendEmail}</h2>
                            <Form id="contact-form">
                                <FormGroup>
                                    <Label for="name">{data.Name}</Label>
                                    <Input type="text" name="name" id="name" placeholder="John Doe" value={this.state.name} onChange={this.setName.bind(this)} onBlur={this.checkNameError.bind(this)} invalid={this.state.nameError} />
                                    <FormFeedback>{data.NameErrorMessage}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="business-name">{data.Business}</Label>
                                    <Input type="text" name="business-name" id="business-name" placeholder="ACME" value={this.state.business} onChange={this.setBusiness.bind(this)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleEmail">{data.Email}</Label>
                                    <Input type="email" name="email" id="email" placeholder="name@email.com" value={this.state.email} onChange={this.setEmail.bind(this)} onBlur={this.checkEmailError.bind(this)} invalid={this.state.emailError} />
                                    <FormFeedback>{data.EmailErrorMessage}</FormFeedback>
                                </FormGroup>

                                <Label>{data.InterestedIn}</Label>
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
                                    <Label for="other">{data.TextBox}</Label>
                                    <Input type="textarea" name="text" id="other" placeholder="I like your website and I want to know more about..." style={{ height: '120px' }} value={this.state.message} onChange={this.setMessage.bind(this)} />
                                </FormGroup>
                                <FormGroup check hidden>
                                    <Label check>
                                        <Input type="checkbox" checked={this.state.captcha || false}
                                            onChange={() => this.setCheck('captcha')} />
                                    </Label>
                                </FormGroup>
                                <Button color='secondary' onClick={this.checkForm.bind(this)}>{data.Submit}</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section >
        );
    }
}
import React from 'react'
import { Button, Card, CardBody, Container, Col, Row, Form, FormFeedback, FormGroup, Label, Input } from 'reactstrap'
import { IconContext } from 'react-icons'
import { FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import NewTabLink from './newTabLink'
import useSiteMetadata from '../hooks/useSiteMetadata'
import useSiteSettings from '../hooks/useSiteSettings'
import useSiteUrls from '../hooks/useSiteUrls'
import { content } from '../utils/content'
import linkColor from '../utils/linkColor'
import validateEmail from '../utils/validateEmail'
import { SectionProps } from '../types'

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
    captcha: boolean,
    sendSuccess: boolean,
    sendFailed: boolean
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
    captcha: false,
    sendSuccess: false,
    sendFailed: false
}

interface ContactProps extends SectionProps {
    componentContactTitle: string
    breakpoint: string
    urls: {
        email: string
        mailForm: string
        messenger: string
        whatsapp: string
    }
}
class Contact extends React.Component<ContactProps, ContactState> {
    constructor(props: ContactProps) {
        super(props);
        this.state = initialState;
    }

    // reset form after sending email
    resetForm () {
        this.setState(initialState)
    }

    // form validation errors
    checkNameError () {
        if (this.state.name.length === 0) {
            this.setState({ nameError: true });
        } else {
            this.setState({ nameError: false });
        }
    }
    checkEmailError () {
        if (!validateEmail(this.state.email)) {
            this.setState({ emailError: true });
        } else {
            this.setState({ emailError: false });
        }
    }

    // check form and send form as email
    checkForm () {
        this.checkNameError();
        this.checkEmailError();
        if (this.state.name.length !== 0 && validateEmail(this.state.email)) {
            this.submit();
        }
    }

    submit () {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { nameError, emailError, captcha, sendSuccess, sendFailed, ...sendState } = this.state;
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(sendState),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        };
        if (!this.state.captcha) {
            fetch(`${this.props.urls.mailForm}`, requestOptions
            ).then((response) => {
                if (response.ok) {
                    this.setState({ sendSuccess: true });
                } else {
                    this.setState({ sendFailed: true });
                    alert(content.MailSendFailed + this.props.urls.email)
                }
            });
        }
    }

    // change / update state
    setName (value: string) {
        this.setState({ name: value });
    }
    setBusiness (value: string) {
        this.setState({ business: value });
    }
    setEmail (value: string) {
        this.setState({ email: value });
    }
    setCheck (value: string) {
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
    setMessage (value: string) {
        this.setState({ message: value });
    }

    render () {
        const { breakpoint, componentContactTitle } = this.props;
        return (
            <section className={this.props.className} id={componentContactTitle}>
                <Container className={`my-${breakpoint}-auto mb-3 mt-3`}>
                    <Row className='d-flex align-items-center'>
                        <Col xs='12' classNmae={`col-${breakpoint}-auto`}>
                            <h1 className={`display-1 text-center text-${breakpoint}-left`}>{componentContactTitle}</h1>
                        </Col>
                        <Col xs='12' className={`col-${breakpoint}-auto text-center mx-${breakpoint}-auto`}>
                            <IconContext.Provider value={{ size: '3rem', style: { margin: '.5rem' } }}>
                                <NewTabLink className={linkColor('dark') + ' nav-padding-social'} href={this.props.urls.whatsapp} ><FaWhatsapp /></NewTabLink>
                                <NewTabLink className={linkColor('dark') + ' nav-padding-social'} href={this.props.urls.messenger}><FaFacebookMessenger /></NewTabLink>
                                <NewTabLink className={linkColor('dark') + ' nav-padding-social'} href={'mailto:' + this.props.urls.email}><MdMail /></NewTabLink>
                            </IconContext.Provider>
                        </Col>
                    </Row>
                    <Row className='mt-3 d-flex flex-column justify-content-between align-items-center'>
                        <Card className='col-12 col-sm-10 col-md-8 col-lg-6 contact-form'>
                            <CardBody>
                                {!this.state.sendSuccess
                                    ? (<div>
                                        <h2>{content.SendEmail}</h2>
                                        <Form id="contact-form">
                                            <FormGroup>
                                                <Label for="name" className='label-bold'>{content.Name}</Label>
                                                <Input type="text" name="name" id="name" placeholder="John Doe" value={this.state.name} onChange={(e) => (this.setName(e.target.value))} onBlur={this.checkNameError.bind(this)} invalid={this.state.nameError} />
                                                <FormFeedback>{content.NameErrorMessage}</FormFeedback>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="business-name" className='label-bold'>{content.Business}</Label>
                                                <Input type="text" name="business-name" id="business-name" placeholder="ACME" value={this.state.business} onChange={(e) => (this.setBusiness(e.target.value))} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="email" className='label-bold'>{content.Email}</Label>
                                                <Input type="email" name="email" id="email" placeholder="name@email.com" value={this.state.email} onChange={(e) => (this.setEmail(e.target.value))} onBlur={this.checkEmailError.bind(this)} invalid={this.state.emailError} />
                                                <FormFeedback>{content.EmailErrorMessage}</FormFeedback>
                                            </FormGroup>

                                            <Label className='label-bold'>{content.InterestedIn}</Label>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="checkbox" checked={this.state.staticDesign || false}
                                                        onChange={() => this.setCheck('staticDesign')} />
                                                    <span className="checkbox-placeholder"></span>Static website (Next.js or Gatsby.js)
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="checkbox" checked={this.state.dynamicDesign || false}
                                                        onChange={() => this.setCheck('dynamicDesign')} />
                                                    <span className="checkbox-placeholder"></span>Dynamic website (WordPress)
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="checkbox" checked={this.state.cmsDesign || false}
                                                        onChange={() => this.setCheck('cmsDesign')} />
                                                    <span className="checkbox-placeholder"></span>Static website + CMS
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="checkbox" checked={this.state.customDesign || false}
                                                        onChange={() => this.setCheck('customDesign')} />
                                                    <span className="checkbox-placeholder"></span>Custom website
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="checkbox" checked={this.state.staticHosting || false}
                                                        onChange={() => this.setCheck('staticHosting')} />
                                                    <span className="checkbox-placeholder"></span>Static website hosting
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="checkbox" checked={this.state.dynamicHosting || false}
                                                        onChange={() => this.setCheck('dynamicHosting')} />
                                                    <span className="checkbox-placeholder"></span>Dynamic website hosting
                                                </Label>
                                            </FormGroup>
                                            <p></p>
                                            <FormGroup>
                                                <Label for="other" className='label-bold'>{content.TextBox}</Label>
                                                <Input type="textarea" name="text" id="other" placeholder="I like your website and I want to know more about..." style={{ height: '120px' }} value={this.state.message} onChange={(e) => (this.setMessage(e.target.value))} />
                                            </FormGroup>
                                            <FormGroup check hidden>
                                                <Label check>
                                                    <Input type="checkbox" checked={this.state.captcha || false}
                                                        onChange={() => this.setCheck('captcha')} />
                                                </Label>
                                            </FormGroup>
                                            <Button color='secondary' onClick={() => this.checkForm()}>{this.state.sendFailed ? content.TryAgain : content.Submit}</Button>
                                        </Form>
                                    </div>)
                                    : (<div>
                                        <h2>{content.SendEmailDone}</h2>
                                        <p>{content.MailSendSuccess}</p>
                                    </div>)}
                            </CardBody>
                        </Card>
                    </Row>
                </Container>
            </section >
        );
    }
}

export default function ContactComponent (props: SectionProps) {
    const { componentContactTitle } = useSiteMetadata();
    const { breakpoint } = useSiteSettings();
    const { email, mailForm, messenger, whatsapp } = useSiteUrls();
    const urls = {
        email: email,
        mailForm: mailForm,
        messenger: messenger,
        whatsapp: whatsapp
    }
    // https://stackoverflow.com/questions/52781291/how-to-use-graphql-queries-in-a-container-class-component
    // https://spectrum.chat/gatsby-js/general/is-this-a-good-way-of-using-gatsby-v2s-staticquery-with-react-component-class~d9db7af2-f594-4199-9640-8756f39876d5

    return (
        <Contact componentContactTitle={componentContactTitle} breakpoint={breakpoint} urls={urls} {...props} />
    )
}
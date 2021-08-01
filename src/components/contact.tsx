import React, { FormEvent, SyntheticEvent } from 'react';
import { Button, Card, CardBody, Container, Col, Row, Form, FormFeedback, FormGroup, Label, Input, ListGroup, ListGroupItem } from 'reactstrap';
import { IconContext } from 'react-icons';
import { FaCheck, FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import NewTabLink from './newTabLink';
import useSiteMetadata from '../hooks/useSiteMetadata';
import useSiteSettings from '../hooks/useSiteSettings';
import useSiteUrls from '../hooks/useSiteUrls';
import { content } from '../utils/content';
import linkColor from '../utils/linkColor';
import validateEmail from '../utils/validateEmail';
import { SectionProps } from '../types';
import { ReactElement } from 'react';

type ContactState = {
    nameError: boolean
    emailError: boolean
    name: string
    business: string
    email: string
    message: string
    staticDesign: boolean
    dynamicDesign: boolean
    hosting: boolean
    compute: boolean,
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
    hosting: false,
    compute: false,
    captcha: false,
    sendSuccess: false,
    sendFailed: false
};

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
    resetForm(): void {
        this.setState(initialState);
    }

    // form validation errors
    checkNameError(): void {
        if (this.state.name.length === 0) {
            this.setState({ ...this.state, nameError: true });
        } else {
            this.setState({ ...this.state, nameError: false });
        }
    }
    checkEmailError(): void {
        if (!validateEmail(this.state.email)) {
            this.setState({ ...this.state, emailError: true });
        } else {
            this.setState({ ...this.state, emailError: false });
        }
    }

    // check form and send form as email
    checkForm(e: FormEvent): void {
        this.checkNameError();
        this.checkEmailError();
        if (this.state.name.length !== 0 && validateEmail(this.state.email)) {
            this.submit(e);
        }
    }

    submit(e: FormEvent): void {
        e.preventDefault();
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
                    this.setState({ ...this.state, sendSuccess: true });
                } else {
                    this.setState({ ...this.state, sendFailed: true });
                    alert(content.MailSendFailed + this.props.urls.email);
                }
            });
        }
    }

    // change / update state
    setName(e: FormEvent<HTMLInputElement>): void {
        e.preventDefault();
        this.setState({ ...this.state, name: e.currentTarget.value });
    }
    setBusiness(e: FormEvent<HTMLInputElement>): void {
        e.preventDefault();
        this.setState({ ...this.state, business: e.currentTarget.value });
    }
    setEmail(e: FormEvent<HTMLInputElement>): void {
        e.preventDefault();
        this.setState({ ...this.state, email: e.currentTarget.value });
    }
    setCheck(e: SyntheticEvent, value: string): void {
        e.preventDefault();
        switch (value) {
            case 'staticDesign': {
                this.setState({ ...this.state, staticDesign: !this.state.staticDesign }); break;
            }
            case 'dynamicDesign': {
                this.setState({ ...this.state, dynamicDesign: !this.state.dynamicDesign }); break;
            }
            case 'hosting': {
                this.setState({ ...this.state, hosting: !this.state.hosting }); break;
            }
            case 'compute': {
                this.setState({ ...this.state, compute: !this.state.compute }); break;
            }
            case 'captcha': {
                this.setState({ ...this.state, captcha: !this.state.captcha }); break;
            }
        }
    }
    setMessage(e: FormEvent<HTMLInputElement>): void {
        this.setState({ message: e.currentTarget.value });
    }

    render(): ReactElement {
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
                                                <Input type="text" name="name" id="name" placeholder="John Doe" value={this.state.name} onChange={(e): void => (this.setName(e))} onBlur={this.checkNameError.bind(this)} invalid={this.state.nameError} />
                                                <FormFeedback>{content.NameErrorMessage}</FormFeedback>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="business-name" className='label-bold'>{content.Business}</Label>
                                                <Input type="text" name="business-name" id="business-name" placeholder="ACME" value={this.state.business} onChange={(e): void => (this.setBusiness(e))} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="email" className='label-bold'>{content.Email}</Label>
                                                <Input type="email" name="email" id="email" placeholder="name@email.com" value={this.state.email} onChange={(e): void => (this.setEmail(e))} onBlur={this.checkEmailError.bind(this)} invalid={this.state.emailError} />
                                                <FormFeedback>{content.EmailErrorMessage}</FormFeedback>
                                            </FormGroup>

                                            <Label className='label-bold'>{content.InterestedIn}</Label>
                                            <ListGroup className='mb-2'>
                                                <ListGroupItem tag='button' className='listgroup-item-contact' action active={this.state.staticDesign} onClick={(e): void => this.setCheck(e, 'staticDesign')}>
                                                    {this.state.staticDesign ? <span className='mr-2'><FaCheck /></span> : null}<span>Next.js or Gatsby.js website</span>
                                                </ListGroupItem>
                                                <ListGroupItem tag='button' className='listgroup-item-contact' action active={this.state.dynamicDesign} onClick={(e): void => this.setCheck(e, 'dynamicDesign')}>
                                                    {this.state.dynamicDesign ? <span className='mr-2'><FaCheck /></span> : null}<span>WordPress or Ghost website</span>
                                                </ListGroupItem>
                                                <ListGroupItem tag='button' className='listgroup-item-contact' action active={this.state.hosting} onClick={(e): void => this.setCheck(e, 'hosting')}>
                                                    {this.state.hosting ? <span className='mr-2'><FaCheck /></span> : null}<span>Website hosting</span>
                                                </ListGroupItem>
                                                <ListGroupItem tag='button' className='listgroup-item-contact' action active={this.state.compute} onClick={(e): void => this.setCheck(e, 'compute')}>
                                                    {this.state.compute ? <span className='mr-2'><FaCheck /></span> : null}<span>Compute</span>
                                                </ListGroupItem>
                                            </ListGroup>

                                            <FormGroup>
                                                <Label for="other" className='label-bold'>{content.TextBox}</Label>
                                                <Input type="textarea" name="text" id="other" placeholder="I like your website and I want to know more about..." style={{ height: '120px' }} value={this.state.message} onChange={(e): void => (this.setMessage(e))} />
                                            </FormGroup>
                                            <FormGroup check hidden>
                                                <Label check>
                                                    <Input type="checkbox" checked={this.state.captcha || false}
                                                        onChange={(e): void => this.setCheck(e, 'captcha')} />
                                                </Label>
                                            </FormGroup>
                                            <Button color='secondary' onClick={(e): void => this.checkForm(e)}>{this.state.sendFailed ? content.TryAgain : content.Submit}</Button>
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

export default function ContactComponent(props: SectionProps): ReactElement {
    const { componentContactTitle } = useSiteMetadata();
    const { breakpoint } = useSiteSettings();
    const { contact } = useSiteUrls();
    const { email, mailForm, messenger, whatsapp } = contact;
    const urls = {
        email: email,
        mailForm: mailForm,
        messenger: messenger,
        whatsapp: whatsapp
    };
    // https://stackoverflow.com/questions/52781291/how-to-use-graphql-queries-in-a-container-class-component
    // https://spectrum.chat/gatsby-js/general/is-this-a-good-way-of-using-gatsby-v2s-staticquery-with-react-component-class~d9db7af2-f594-4199-9640-8756f39876d5

    return (
        <Contact componentContactTitle={componentContactTitle} breakpoint={breakpoint} urls={urls} {...props} />
    );
}
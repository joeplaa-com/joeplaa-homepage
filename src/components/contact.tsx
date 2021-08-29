import React, { FormEvent, ReactElement, useState } from 'react';
import { Button, Card, CardBody, Container, Col, Row, Form, FormFeedback, FormGroup, Label, Input, ListGroup, ListGroupItem } from 'reactstrap';
import { IconContext } from 'react-icons';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdMail } from 'react-icons/md';
import { SiSignal, SiTelegram, SiWhatsapp } from 'react-icons/si';
import NewTabLink from './newTabLink';
import useSiteMetadata from '../hooks/useSiteMetadata';
import useSiteSettings from '../hooks/useSiteSettings';
import useSiteUrls from '../hooks/useSiteUrls';
import { SectionProps } from '../types';
import { content } from '../utils/content';
import linkColor from '../utils/linkColor';
import validateEmail from '../utils/validateEmail';

interface FormState {
    name: string,
    business: string,
    email: string,
    message: string,
    website: boolean,
    webshop: boolean,
    webhosting: boolean,
    hosting: boolean,
    captcha: boolean,
    sendSuccess: boolean,
    sendFailed: boolean
}

interface ErrorState {
    nameError: boolean,
    emailError: boolean
}

const initialFormState: FormState = {
    name: '',
    business: '',
    email: '',
    message: '',
    website: false,
    webshop: false,
    webhosting: false,
    hosting: false,
    captcha: false,
    sendSuccess: false,
    sendFailed: false
};

const initialErrorState: ErrorState = {
    nameError: false,
    emailError: false
};

export default function ContactComponent(props: SectionProps): ReactElement {
    const { componentContactTitle } = useSiteMetadata();
    const { breakpoint } = useSiteSettings();
    const { contact, site } = useSiteUrls();
    const { email, telegram, whatsapp } = contact;
    const { className } = props;

    // local state
    const [formState, setFormState] = useState<FormState>(initialFormState);
    const [errorState, setErrorState] = useState<ErrorState>(initialErrorState);

    // reset form after sending email
    function resetForm(): void {
        setFormState(initialFormState);
        setErrorState(initialErrorState);
    }

    // send form
    function submit(e: FormEvent): void {
        e.preventDefault();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { captcha, sendSuccess, sendFailed, ...sendState } = formState;
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(sendState),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        };
        if (!formState.captcha) {
            fetch(`${site.mailForm}`, requestOptions
            ).then((response) => {
                if (response.ok) {
                    setFormState({ ...formState, sendSuccess: true });
                    setTimeout(() => {
                        resetForm();
                    }, 10000);
                } else {
                    setFormState({ ...formState, sendFailed: true });
                    alert(content.MailSendFailed + email);
                }
            });
        }
    }

    // form validation errors
    function checkNameError(): void {
        if (formState.name.length === 0) {
            setErrorState({ ...errorState, nameError: true });
        } else {
            setErrorState({ ...errorState, nameError: false });
        }
    }
    function checkEmailError(): void {
        if (!validateEmail(formState.email)) {
            setErrorState({ ...errorState, emailError: true });
        } else {
            setErrorState({ ...errorState, emailError: false });
        }
    }

    // check form and send form as email
    function checkForm(e: FormEvent): void {
        checkNameError();
        checkEmailError();
        if (formState.name.length !== 0 && validateEmail(formState.email)) {
            submit(e);
        }
    }

    return (
        <section className={className} id={componentContactTitle} >
            <Container className={`my-${breakpoint}-auto mb-3 mt-3`}>
                <Row className='d-flex align-items-center'>
                    <Col xs='12' classNmae={`col-${breakpoint}-auto`}>
                        <h1 className='display-1 text-center text'>{componentContactTitle}</h1>
                    </Col>
                    <Col xs='12' className={`col-${breakpoint}-auto text-center mx-${breakpoint}-auto`}>
                        <IconContext.Provider value={{ size: '3rem', style: { margin: '.5rem' } }}>
                            <span className={linkColor('dark') + ' nav-padding-social'}><SiSignal /></span>
                            <NewTabLink className={linkColor('dark') + ' nav-padding-social'} href={telegram} ><SiTelegram /></NewTabLink>
                            <NewTabLink className={linkColor('dark') + ' nav-padding-social'} href={whatsapp} ><SiWhatsapp /></NewTabLink>
                            <NewTabLink className={linkColor('dark') + ' nav-padding-social'} href={'mailto:' + email}><MdMail /></NewTabLink>
                        </IconContext.Provider>
                    </Col>
                </Row>
                <Row className='mt-3 d-flex flex-column justify-content-between align-items-center'>
                    <Card className='col-12 col-sm-10 col-md-8 col-lg-6 contact-form'>
                        <CardBody>
                            {!formState.sendSuccess
                                ? <>
                                    <h2>{content.SendEmail}</h2>
                                    <Form id="contact-form">
                                        <FormGroup>
                                            <Label for="name" className='label-bold'>{content.Name}</Label>
                                            <Input type="text" name="name" id="name" placeholder="John Doe" value={formState.name} onChange={(e): void => { e.preventDefault(); setFormState({ ...formState, name: e.target.value }); }} onBlur={checkNameError} invalid={errorState.nameError} />
                                            <FormFeedback>{content.NameErrorMessage}</FormFeedback>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="business-name" className='label-bold'>{content.Business}</Label>
                                            <Input type="text" name="business-name" id="business-name" placeholder="ACME" value={formState.business} onChange={(e): void => { e.preventDefault(); setFormState({ ...formState, business: e.target.value }); }} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="email" className='label-bold'>{content.Email}</Label>
                                            <Input type="email" name="email" id="email" placeholder="name@email.com" value={formState.email} onChange={(e): void => { e.preventDefault(); setFormState({ ...formState, email: e.target.value }); }} onBlur={checkEmailError} invalid={errorState.emailError} />
                                            <FormFeedback>{content.EmailErrorMessage}</FormFeedback>
                                        </FormGroup>

                                        <Label className='label-bold'>{content.InterestedIn}</Label>
                                        <ListGroup className='mb-2'>
                                            <ListGroupItem tag='button' className='listgroup-item-contact' action active={formState.website} onClick={(e): void => { e.preventDefault(); setFormState({ ...formState, website: !formState.website }); }}>
                                                {formState.website ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}<span className='ml-3'>{content.WebsiteDesign}</span>
                                            </ListGroupItem>
                                            <ListGroupItem tag='button' className='listgroup-item-contact' action active={formState.webshop} onClick={(e): void => { e.preventDefault(); setFormState({ ...formState, webshop: !formState.webshop }); }}>
                                                {formState.webshop ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}<span className='ml-3'>{content.WebshopSetup}</span>
                                            </ListGroupItem>
                                            <ListGroupItem tag='button' className='listgroup-item-contact' action active={formState.webhosting} onClick={(e): void => { e.preventDefault(); setFormState({ ...formState, webhosting: !formState.webhosting }); }}>
                                                {formState.webhosting ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}<span className='ml-3'>{content.WebsiteHosting}</span>
                                            </ListGroupItem>
                                            <ListGroupItem tag='button' className='listgroup-item-contact' action active={formState.hosting} onClick={(e): void => { e.preventDefault(); setFormState({ ...formState, hosting: !formState.hosting }); }}>
                                                {formState.hosting ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}<span className='ml-3'>{content.Hosting}</span>
                                            </ListGroupItem>
                                        </ListGroup>

                                        <FormGroup>
                                            <Label for="other" className='label-bold'>{content.TextBox}</Label>
                                            <Input type="textarea" name="text" id="other" placeholder="I like your website and I want to know more about..." style={{ height: '120px' }} value={formState.message} onChange={(e): void => { e.preventDefault(); setFormState({ ...formState, message: e.target.value }); }} />
                                        </FormGroup>
                                        <FormGroup check hidden>
                                            <Label check>
                                                <Input type="checkbox" checked={formState.captcha || false}
                                                    onChange={(e): void => { e.preventDefault(); setFormState({ ...formState, captcha: !formState.captcha }); }} />
                                            </Label>
                                        </FormGroup>
                                        <Button color='primary' onClick={(e): void => checkForm(e)}>{formState.sendFailed ? content.TryAgain : content.Submit}</Button>
                                    </Form>
                                </>
                                : <>
                                    <h2>{content.SendEmailDone}</h2>
                                    <p>{content.MailSendSuccess}</p>
                                </>}
                        </CardBody>
                    </Card>
                </Row>
            </Container>
        </section>
    );
}

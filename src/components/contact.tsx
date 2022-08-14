import React, { ReactElement, useState } from 'react';
import { Button, Card, CardBody, Container, Col, Row, Form, FormFeedback, FormGroup, Label, Input, ListGroup, ListGroupItem, Spinner } from 'reactstrap';
import { IconContext } from 'react-icons';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdMail } from 'react-icons/md';
import { SiSignal, SiTelegram, SiWhatsapp } from 'react-icons/si';
import NewTabLink from './newTabLink';
import useSiteMetadata from '../hooks/useSiteMetadata';
import useSiteSettings from '../hooks/useSiteSettings';
import useSiteUrls from '../hooks/useSiteUrls';
import { SectionProps } from '../types';
import { checkEmailError, checkNameError } from '../utils/checkForm';
import { content } from '../utils/content';
import linkColor from '../utils/linkColor';

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
    status: undefined | 'Sending' | 'OK' | 'Error' | 'NAME_REQUIRED' | 'EMAIL_REQUIRED' | 'MESSAGE_REQUIRED' | 'EMAIL_INVALID'
}

interface ErrorState {
    nameError: boolean,
    emailError: boolean
    messageError: boolean
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
    status: undefined
};

const initialErrorState: ErrorState = {
    nameError: false,
    emailError: false,
    messageError: false
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

    // Set error state when form is checked
    function checkError(): boolean {
        const nameError = checkNameError(formState.name);
        const mailError = checkEmailError(formState.email);
        const messageError = checkNameError(formState.message);

        if (nameError || mailError || messageError) {
            setErrorState(s => ({
                ...s,
                name: nameError,
                email: mailError,
                message: messageError
            }));
        }

        return nameError || mailError || messageError;
    }

    function onBlur(input: 'name' | 'email' | 'message'): void {
        switch (input) {
            case 'name':
                setErrorState(s => ({ ...s, name: checkNameError(formState.name) }));
                break;
            case 'email':
                setErrorState(s => ({ ...s, email: checkEmailError(formState.email) }));
                break;
            case 'message':
                setErrorState(s => ({ ...s, message: checkNameError(formState.message) }));
                break;
        }
    }

    function handleSubmit(): void {
        if (!checkError()) {
            setFormState({ ...formState, status: 'Sending' });

            const body = JSON.stringify(formState);

            const requestOptions = {
                method: 'POST',
                body: body,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            };

            // fetch is not supported in op_mini all, IE 11
            // eslint-disable-next-line compat/compat
            fetch(`${site.mailForm}/form`, requestOptions)
                .then((response) => {
                    // console.log('response: ', response);
                    if (response.ok) {
                        resetForm();
                    }
                    return response.json();
                })
                .then((data) => {
                    // console.log('data:', data);
                    setFormState({ ...formState, status: data.status || data.error || 'Error' });
                })
                .catch(() => { // unknown errors
                    // console.log('error: ', error);
                    setFormState({ ...formState, status: 'Error' });
                });
        }
    }

    function cardContent(): ReactElement {
        let header = content.SendEmail;
        let body = <Form>
            <FormGroup>
                <Label for="name" className='label-bold'>{content.Name}</Label>
                <Input type="text" name="name" id="name" placeholder="John Doe" value={formState.name} onChange={(e): void => { e.preventDefault(); setFormState({ ...formState, name: e.target.value }); }} onBlur={(): void => onBlur('name')} invalid={errorState.nameError} />
                <FormFeedback>{content.NameErrorMessage}</FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label for="business-name" className='label-bold'>{content.Business}</Label>
                <Input type="text" name="business-name" id="business-name" placeholder="ACME" value={formState.business} onChange={(e): void => { e.preventDefault(); setFormState({ ...formState, business: e.target.value }); }} />
            </FormGroup>
            <FormGroup>
                <Label for="email" className='label-bold'>{content.Email}</Label>
                <Input type="email" name="email" id="email" placeholder="name@email.com" value={formState.email} onChange={(e): void => { e.preventDefault(); setFormState({ ...formState, email: e.target.value }); }} onBlur={(): void => onBlur('email')} invalid={errorState.emailError} />
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
                <Input type="textarea" name="text" id="other" placeholder="I like your website and I want to know more about..." style={{ height: '120px' }} value={formState.message} onChange={(e): void => { e.preventDefault(); setFormState({ ...formState, message: e.target.value }); }} onBlur={(): void => onBlur('message')} invalid={errorState.messageError} />
            </FormGroup>
            <FormGroup check hidden>
                <Label check>
                    <Input type="checkbox" checked={formState.captcha || false}
                        onChange={(e): void => { e.preventDefault(); setFormState({ ...formState, captcha: !formState.captcha }); }} />
                </Label>
            </FormGroup>
        </Form>;
        let buttons = <>
            <Button color="primary" onClick={(): void => handleSubmit()}>{content.Submit}</Button>{' '}
            <Button color="secondary" onClick={resetForm}>{content.Clear}</Button>
        </>;

        switch (formState.status) {
            case 'Sending':
                header = content.EmailSending;
                body = <Row>
                    <Col>
                        {content.EmailSendingBody}
                    </Col>
                </Row>;
                buttons = <>
                    <Button disabled><Spinner size='sm' /></Button>{' '}
                    <Button color="secondary" disabled>{content.Clear}</Button>
                </>;
                break;
            case 'OK':
                header = content.SendEmailDone;
                body = <Row>
                    <Col>
                        {content.MailSendSuccess}
                    </Col>
                </Row>;
                buttons = <>
                    <Button color="secondary" onClick={resetForm}>{content.Reset}</Button>
                </>;
                break;
            case 'EMAIL_REQUIRED':
            case 'EMAIL_INVALID':
            case 'NAME_REQUIRED':
            case 'MESSAGE_REQUIRED':
            case 'Error':
                header = content.EmailError;
                body = <Row>
                    <Col>
                        {content.EmailErrorBody}
                    </Col>
                </Row>;
                buttons = <>
                    <Button color="primary" onClick={(): void => setFormState({ ...formState, status: undefined })}>{content.TryAgain}</Button>{' '}
                    <Button color="secondary" onClick={resetForm}>{content.Clear}</Button>
                </>;
                break;
            default:
                break;
        }

        return (
            <>
                <h2>{header}</h2>
                <div>{body}</div>
                <div>{buttons}</div>
            </>
        );
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
                            {cardContent()}
                        </CardBody>
                    </Card>
                </Row>
            </Container>
        </section>
    );
}

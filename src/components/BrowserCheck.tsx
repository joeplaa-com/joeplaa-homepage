import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Modal, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap';
import { browserName } from 'react-device-detect';
import { differenceInDays } from 'date-fns';
import settings from '../data/settings.json';
import nl from '../data/nl.json';
import { applicationActionCreators } from '../store/actions/application';
import { IApplicationState, IRootState } from '../store/interfaces';

// At runtime, Redux will merge together...
type ApplicationProps =
    IApplicationState // ... state we've requested from the Redux store
    & typeof applicationActionCreators // ... plus action creators we've requested

const BrowserCheck: React.FC<ApplicationProps> = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: IRootState) => state.application);

    const toggleHideModal = () => dispatch(applicationActionCreators.hideModal());
    const toggleShowModal = () => dispatch(applicationActionCreators.showModal());

    useEffect(() => {
        dispatch(applicationActionCreators.setBrowser(browserName));
    }, []);

    if (state && !state.isSupported) {
        // Browser unsupported: warn user and show download links for supported browsers, but allow them to continue.
        // Keep this state for one day. After one day the visitor gets the modal again.
        return (
            <section className="top-banner">
                <Modal isOpen={state && state.showModal && (state.setModal === undefined || differenceInDays(new Date(), state.setModal) > 1)} toggle={toggleHideModal}>
                    <ModalHeader toggle={toggleHideModal}>{nl.UnsupportedTitle}</ModalHeader>
                    <ModalBody>
                        {nl.UnsupportedMessage}
                        <p></p>
                        <div className="d-flex justify-content-around">
                            <Button color="success" href={settings.externalUrl.chrome}>Google Chrome</Button>{' '}
                            <Button color="warning" href={settings.externalUrl.firefox}>Mozilla Firefox</Button>{' '}
                            <Button color="primary" href={settings.externalUrl.edge}>Microsoft Edge</Button>{' '}
                        </div>
                        <p></p>
                        {nl.UnsupportedContinue}
                    </ModalBody>
                    <ModalFooter>
                        <Button outline color="primary" href={settings.externalUrl.browserInfo}>{nl.Info}</Button>
                        <Button outline color="primary" onClick={toggleHideModal}>{nl.Continue}</Button>
                    </ModalFooter>
                </Modal>
                <Row>
                    <Col className="top-banner-col">
                        <div className="mr-2">{nl.ShowModalMessage}</div>
                        <Button outline color="dark" size="sm" onClick={toggleShowModal}>{nl.ShowModal}</Button>
                    </Col>
                </Row>
            </section>
        );
    } else {
        return null;
    }
};

export default BrowserCheck;

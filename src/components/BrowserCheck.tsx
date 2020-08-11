import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Modal, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap';
import { browserName } from 'react-device-detect';
import { differenceInDays } from 'date-fns';
import settings from '../data/settings.json';
import en from '../data/en.json';
import { applicationActionCreators } from '../store/actions/application';
import { IRootState } from '../store/interfaces';

const BrowserCheck = () => {
    const dispatch = useDispatch();
    const application = useSelector((state: IRootState) => state.application);

    const toggleHideModal = () => dispatch(applicationActionCreators.hideModal());
    const toggleShowModal = () => dispatch(applicationActionCreators.showModal());

    useEffect(() => {
        dispatch(applicationActionCreators.setBrowser(browserName));
    }, []);

    console.log(application);

    if (application && !application.isSupported) {
        // Browser unsupported: warn user and show download links for supported browsers, but allow them to continue.
        // Keep this state for one day. After one day the visitor gets the modal again.
        return (
            <div className="top-banner">
                <Modal isOpen={application && application.showModal && (application.setModal === undefined || differenceInDays(new Date(), application.setModal) > 1)} toggle={toggleHideModal}>
                    <ModalHeader toggle={toggleHideModal}>{en.UnsupportedTitle}</ModalHeader>
                    <ModalBody>
                        {en.UnsupportedMessage}
                        <p></p>
                        <div className="d-flex justify-content-around">
                            <Button color="success" href={settings.externalUrl.chrome}>Google Chrome</Button>{' '}
                            <Button color="warning" href={settings.externalUrl.firefox}>Mozilla Firefox</Button>{' '}
                            <Button color="primary" href={settings.externalUrl.edge}>Microsoft Edge</Button>{' '}
                        </div>
                        <p></p>
                        {en.UnsupportedContinue}
                    </ModalBody>
                    <ModalFooter>
                        <Button outline color="primary" href={settings.externalUrl.browserInfo}>{en.Info}</Button>
                        <Button outline color="primary" onClick={toggleHideModal}>{en.Continue}</Button>
                    </ModalFooter>
                </Modal>
                <Row>
                    <Col className="top-banner-col">
                        <div className="mr-2">{en.ShowModalMessage}</div>
                        <Button outline color="dark" size="sm" onClick={toggleShowModal}>{en.ShowModal}</Button>
                    </Col>
                </Row>
            </div>
        );
    } else {
        return null;
    }
};

export default BrowserCheck;

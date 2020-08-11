import React from 'react';
import { connect } from 'react-redux';
import { Button, Col, Row } from 'reactstrap';
import { FaChrome, FaFirefox, FaEdge } from 'react-icons/fa';
import { ReactCookieProps, withCookies } from 'react-cookie';
import { ApplicationState } from '../store/interfaces';
import Calendar from './Calendar';
import SpinnerComp from './Spinnercomp';
import StatusMessage from './StatusMessage';
import { RootState } from '../store/interfaces';
import constants from '../data/constants.json';
import nl from '../data/nl.json';
import { applicationActionCreators } from '../store/actions/application';
import { getToken, isTokenValid } from '../cookies/token';

// At runtime, Redux will merge together...
type ApplicationProps =
    ApplicationState // ... state we've requested from the Redux store
    & typeof applicationActionCreators // ... plus action creators we've requested
    & ReactCookieProps // ... plus cookies

class BrowserCheck extends React.Component<ApplicationProps> {
    constructor(props: ApplicationProps) {
        super(props);
    }

    public componentDidMount() {
        // If the token has expired (or expires within an hour), redirect to the refresh page
        if (!isTokenValid(this.props.cookies)) {
            window.location.href = process.env.NEXT_PUBLIC_REFRESHTOKEN_PATH!;
        }

        this.props.requestSettings(getToken(this.props.cookies));
    }

    continueUntested = () => {
        this.props.forceContinue();
    }

    public render() {
        let renderContent;
        if (this.props.isDetected) {
            if (this.props.isSupported) {
                // browser supported: show calendar
                if (!this.props.maintenance && this.props.license) {
                    if (!this.props.isLoading) {
                        renderContent = <Calendar />
                    } else {
                        renderContent = <SpinnerComp />;
                    };
                } else {
                    renderContent = <StatusMessage />;
                };
            } else if (this.props.isUnsupported) {
                // browser unsupported: warn/block user and show download links for supported browsers
                renderContent =
                    <Row className="statusClassRow">
                        <Col xs="12" sm="10" md="9" lg="6" className="statusClassCol statusClassLicense">
                            <h1>{nl.UnsupportedTitle}</h1>
                            <Row className="d-flex justify-content-between align-items-center">
                                <Col>{nl.UnsupportedMessage}</Col>
                            </Row>
                            <p></p>
                            <Row className="d-flex justify-content-around">
                                <Button color="success" href={constants.externalUrl.chrome}><FaChrome />{' '}Google Chrome</Button>
                                <Button color="warning" href={constants.externalUrl.firefox}><FaFirefox />{' '}Mozilla Firefox</Button>
                                <Button color="primary" href={constants.externalUrl.edge}><FaEdge />{' '}Microsoft Edge</Button>
                            </Row>
                            <hr />
                            <p></p>
                            <Row className="d-flex justify-content-between align-items-center">
                                <Col>{nl.BrowserInfo}</Col>
                                <Col xs='auto' className="d-flex justify-content-center align-items-center">
                                    <Button outline color="warning" href={process.env.NEXT_PUBLIC_HOME_URL + constants.homepageUrl.errorHelp}>{nl.Contact}</Button>
                                    <p>&nbsp;</p>
                                    <Button outline color="warning" href={process.env.NEXT_PUBLIC_DOCS_URL + constants.docsUrl.browserInfo}>{nl.Info}</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>;
            } else {
                // catch all others: support not tested: warn user, show download links for supported browser, but allow them to continue
                renderContent =
                    <Row className="statusClassRow">
                        <Col xs="12" sm="10" md="9" lg="6" className="statusClassCol statusClassBrowser">
                            <h1>{nl.UntestedTitle}</h1>
                            <Row className="d-flex justify-content-between align-items-center">
                                <Col>{nl.UntestedMessage}</Col>
                            </Row>
                            <p></p>
                            <Row className="d-flex justify-content-around">
                                <Button color="success" href={constants.externalUrl.chrome}><FaChrome />{' '}Chrome</Button>
                                <Button color="warning" href={constants.externalUrl.firefox}><FaFirefox />{' '}Firefox</Button>
                                <Button color="primary" href={constants.externalUrl.edge}><FaEdge />{' '}Edge</Button>
                            </Row>
                            <hr />
                            <p></p>
                            <Row className="d-flex justify-content-between align-items-center">
                                <Col>{nl.UntestedContinue}</Col>
                                <Col xs='auto'><Button outline color="primary" onClick={this.continueUntested}>{' '}{nl.Continue}</Button></Col>
                            </Row>
                            <hr />
                            <p></p>
                            <Row className="d-flex justify-content-between align-items-center">
                                <Col>{nl.BrowserInfo}</Col>
                                <Col xs='auto' className="d-flex justify-content-center align-items-center">
                                    <Button outline color="primary" href={process.env.NEXT_PUBLIC_HOME_URL + constants.homepageUrl.errorHelp}>{nl.Contact}</Button>
                                    <p>&nbsp;</p>
                                    <Button outline color="primary" href={process.env.NEXT_PUBLIC_DOCS_URL + constants.docsUrl.browserInfo}>{nl.Info}</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>;
            }
        } else {
            renderContent = <SpinnerComp />;
        }

        return (
            renderContent
        )
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        isDetected: (state.application && state.application.isDetected),
        isSupported: (state.application && state.application.isSupported),
        isUnsupported: (state.application && state.application.isUnsupported),
        isLoading: (state.application && state.application.isLoading),
        license: (state.application && state.application.license),
        maintenance: (state.application && state.application.maintenance),
        settings: (state.application && state.application.settings)
    };
};

export default withCookies(connect(mapStateToProps, applicationActionCreators)(BrowserCheck as any));

import React, { useState } from 'react';
import {
    Collapse, Container,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown,
    Nav, Navbar, NavbarBrand, NavbarToggler, NavItem
} from 'reactstrap';
import { IconContext } from 'react-icons/lib';
import { FaList, FaAddressBook, FaTruck, FaTags, FaFileExport, FaCog, FaReadme, FaSignOutAlt } from 'react-icons/fa';
import { MdHome, MdToday, MdTrendingUp, MdTrendingDown, MdDonutLarge, MdBuild, MdAccountCircle } from 'react-icons/md';
import settings from '../data/settings.json';
import en from '../data/en.json';

const Menu = () => {
    // toggle burger navbar
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    // recommended dropdown
    const [recommendedOpen, setRecommendedOpen] = useState(false);
    const toggleRecommended = () => setRecommendedOpen(prevState => !prevState);

    const renderNav = () => {
        return (
            <Nav navbar>
                {/*Home*/}
                <UncontrolledDropdown>
                    <IconContext.Provider value={{ size: '24' }}>
                        <NavItem className="m-1">
                            <DropdownItem className="nav-link" href={settings.homepageUrl.home}>
                                <span className="d-inline-flex justify-content-center align-items-center">
                                    <MdHome />
                                    <span className="d-flex d-md-none d-lg-flex ml-1">{en.Home}</span>
                                </span>
                            </DropdownItem>
                        </NavItem>
                    </IconContext.Provider>
                </UncontrolledDropdown>

                {/*Blog*/}
                <UncontrolledDropdown>
                    <IconContext.Provider value={{ size: '24' }}>
                        <NavItem className="m-1">
                            <DropdownItem className="nav-link" href={settings.homepageUrl.blog}>
                                <span className="d-inline-flex justify-content-center align-items-center">
                                    <MdToday />
                                    <span className="d-flex d-md-none d-lg-flex ml-1">{en.Blog}</span>
                                </span>
                            </DropdownItem>
                        </NavItem>
                    </IconContext.Provider>
                </UncontrolledDropdown>

                {/*Portfolio*/}
                <UncontrolledDropdown>
                    <IconContext.Provider value={{ size: '24' }}>
                        <NavItem className="m-1">
                            <DropdownItem className="nav-link" href={settings.homepageUrl.portfolio}>
                                <span className="d-inline-flex justify-content-center align-items-center">
                                    <MdToday />
                                    <span className="d-flex d-md-none d-lg-flex ml-1">{en.Portfolio}</span>
                                </span>
                            </DropdownItem>
                        </NavItem>
                    </IconContext.Provider>
                </UncontrolledDropdown>

                {/*Settings*/}
                <Dropdown inNavbar className="m-1" isOpen={recommendedOpen} toggle={toggleRecommended}>
                    <IconContext.Provider value={{ size: '24' }}>
                        <DropdownToggle nav caret>
                            <span className="d-inline-flex justify-content-center align-items-center">
                                <MdAccountCircle />
                                <span className="d-flex d-md-none d-lg-flex ml-1">{en.Recommended}</span>
                            </span>
                        </DropdownToggle>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ size: '16' }}>
                        <DropdownMenu right>
                            <DropdownItem tag="a" href={settings.homepageUrl.books}><FaCog /><span className="ml-1">{en.Books}</span></DropdownItem>
                            <DropdownItem tag="a" href={settings.homepageUrl.talks}><FaReadme /><span className="ml-1">{en.Talks}</span></DropdownItem>
                            <DropdownItem tag="a" href={settings.homepageUrl.videos}><FaReadme /><span className="ml-1">{en.Videos}</span></DropdownItem>
                        </DropdownMenu>
                    </IconContext.Provider>
                </Dropdown>
            </Nav>
        )
    };

    return (
        <Navbar expand="md" light className="bg-white shadow fixed-top navbar-ontop">
            <Container>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar className="justify-content-end">
                    {renderNav()}
                </Collapse>
            </Container>
        </Navbar >
    )
}

export default Menu;

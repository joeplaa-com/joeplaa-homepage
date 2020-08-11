import React, { useState } from 'react';
import {
    Collapse, Container,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown,
    Nav, Navbar, NavbarBrand, NavbarToggler, NavItem
} from 'reactstrap';
import { IconContext } from 'react-icons/lib';
import { FaList, FaAddressBook, FaTruck, FaTags, FaFileExport, FaCog, FaReadme, FaSignOutAlt } from 'react-icons/fa';
import { MdHome, MdToday, MdTrendingUp, MdTrendingDown, MdDonutLarge, MdBuild, MdAccountCircle } from 'react-icons/md';
import constants from '../data/constants.json';
import nl from '../data/nl.json';

const Menu = () => {
    // toggle burger navbar
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    // finance dropdown
    const [financeOpen, setFinanceOpen] = useState(false);
    const toggleFinance = () => setFinanceOpen(prevState => !prevState);
    // manage dropdown
    const [manageOpen, setManageOpen] = useState(false);
    const toggleManage = () => setManageOpen(prevState => !prevState);
    // settings dropdown
    const [settingsOpen, setSettingsOpen] = useState(false);
    const toggleSettings = () => setSettingsOpen(prevState => !prevState);

    const dashboardLink = process.env.NEXT_PUBLIC_DASHBOARD_PATH

    const renderNav = () => {
        return (
            <Nav navbar>
                {/*Dashboard*/}
                <UncontrolledDropdown>
                    <IconContext.Provider value={{ size: '24' }}>
                        <NavItem className="m-1">
                            <DropdownItem className="nav-link" href={dashboardLink}>
                                <span className="d-inline-flex justify-content-center align-items-center">
                                    <MdHome />
                                    <span className="d-flex d-md-none d-lg-flex ml-1">{nl.Dashboard}</span>
                                </span>
                            </DropdownItem>
                        </NavItem>
                    </IconContext.Provider>
                </UncontrolledDropdown>

                {/*Calendar*/}
                <UncontrolledDropdown>
                    <IconContext.Provider value={{ size: '24' }}>
                        <NavItem className="m-1">
                            <DropdownItem className="nav-link" href={process.env.NEXT_PUBLIC_URL}>
                                <span className="d-inline-flex justify-content-center align-items-center">
                                    <MdToday />
                                    <span className="d-flex d-md-none d-lg-flex ml-1">{nl.Calendar}</span>
                                </span>
                            </DropdownItem>
                        </NavItem>
                    </IconContext.Provider>
                </UncontrolledDropdown>

                {/*Finance*/}
                <Dropdown inNavbar className="m-1" isOpen={financeOpen} toggle={toggleFinance}>
                    <IconContext.Provider value={{ size: '24' }}>
                        <DropdownToggle nav caret>
                            <span className="d-inline-flex justify-content-center align-items-center">
                                <MdDonutLarge />
                                <span className="d-flex d-md-none d-lg-flex ml-1">{nl.Finance}</span>
                            </span>
                        </DropdownToggle>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ size: '24' }}>
                        <DropdownMenu right>
                            <DropdownItem tag="a" href={dashboardLink + constants.dashboardUrl.revenue}><MdTrendingUp /><span className="ml-1">{nl.Revenue}</span></DropdownItem>
                            <DropdownItem tag="a" href={dashboardLink + constants.dashboardUrl.expenses}><MdTrendingDown /><span className="ml-1">{nl.Expenses}</span></DropdownItem>
                        </DropdownMenu>
                    </IconContext.Provider>
                </Dropdown>

                {/*Manage*/}
                <Dropdown inNavbar className="m-1" isOpen={manageOpen} toggle={toggleManage}>
                    <IconContext.Provider value={{ size: '24' }}>
                        <DropdownToggle nav caret>
                            <span className="d-inline-flex justify-content-center align-items-center">
                                <MdBuild />
                                <span className="d-flex d-md-none d-lg-flex ml-1">{nl.Manage}</span>
                            </span>
                        </DropdownToggle>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ size: '16' }}>
                        <DropdownMenu right>
                            <DropdownItem tag="a" href={dashboardLink + constants.dashboardUrl.priceList}><FaList /><span className="ml-1">{nl.MyPriceList}</span></DropdownItem>
                            <DropdownItem tag="a" href={dashboardLink + constants.dashboardUrl.customers}><FaAddressBook /><span className="ml-1">{nl.Customers}</span></DropdownItem>
                            <DropdownItem tag="a" href={dashboardLink + constants.dashboardUrl.suppliers}><FaTruck /><span className="ml-1">{nl.Suppliers}</span></DropdownItem>
                            <DropdownItem tag="a" href={dashboardLink + constants.dashboardUrl.labels}><FaTags /><span className="ml-1">{nl.Labels}</span></DropdownItem>
                            <DropdownItem tag="a" href={dashboardLink + constants.dashboardUrl.bookkeeper}><FaFileExport /><span className="ml-1">{nl.Bookkeeper}</span></DropdownItem>
                        </DropdownMenu>
                    </IconContext.Provider>
                </Dropdown>

                {/*Settings*/}
                <Dropdown inNavbar className="m-1" isOpen={settingsOpen} toggle={toggleSettings}>
                    <IconContext.Provider value={{ size: '24' }}>
                        <DropdownToggle nav caret>
                            <span className="d-inline-flex justify-content-center align-items-center">
                                <MdAccountCircle />
                                <span className="d-flex d-md-none d-lg-flex ml-1">{nl.Other}</span>
                            </span>
                        </DropdownToggle>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ size: '16' }}>
                        <DropdownMenu right>
                            <DropdownItem tag="a" href={dashboardLink + constants.dashboardUrl.settings}><FaCog /><span className="ml-1">{nl.Settings}</span></DropdownItem>
                            <DropdownItem tag="a" href={process.env.NEXT_PUBLIC_DOCS_URL}><FaReadme /><span className="ml-1">{nl.Help}</span></DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem tag="a" href={dashboardLink + constants.dashboardUrl.logOut} className="btn-red" color="warning"><FaSignOutAlt /><span className="ml-1">{nl.LogOut}</span></DropdownItem>
                        </DropdownMenu>
                    </IconContext.Provider>
                </Dropdown>
            </Nav>
        )
    };

    return (
        <Navbar expand="md" light className="bg-white shadow fixed-top navbar-ontop">
            <Container>
                <NavbarBrand href={dashboardLink} className="mr-auto" title="jodiBooks Beauty" data-placement="bottom" data-toggle="tooltip">
                    <img alt="jodiBooks, bijna net zo leuk als je werk" src={require('../../public/web_banner_white_nl.svg')} height="55px" />
                </NavbarBrand>

                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar className="justify-content-end">
                    {renderNav()}
                </Collapse>
            </Container>
        </Navbar >
    )
}

export default Menu;

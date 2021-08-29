import React, { ReactElement } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { NavLink } from 'reactstrap';
import { CustomNavLinkProps } from '../types';

const CustomNavLink = (props: CustomNavLinkProps): ReactElement => {
    if (props.to.includes('#')) {
        return (
            <AnchorLink {...props} className={'nav-link'} title={props.title ? props.title : undefined}>
                {props.children ? props.children : null}
            </AnchorLink>
        );
    } else {
        return (
            <NavLink href={props.to}>
                {props.children}
            </NavLink>
        );
    }
};

export default CustomNavLink;
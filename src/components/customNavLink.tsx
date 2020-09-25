import React from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { NavLink } from 'reactstrap'

const CustomNavLink = (props) => {
    if (props.to) {
        return (
            <AnchorLink
                {...props}
                activeClassName='nav-link-active'
                className='nav-link'
            />
        )
    } else {
        return (
            <NavLink href={props.href}>
                {props.children}
            </NavLink>
        )
    }
}

export default CustomNavLink
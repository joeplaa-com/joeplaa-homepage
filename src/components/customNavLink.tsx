import React from 'react'
import { Link } from 'gatsby'
import { NavLink } from 'reactstrap'

const CustomNavLink = (props) => {
    if (props.to) {
        return (
            <Link
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
import React from 'react'
import { Link } from 'gatsby'
import { NavLink } from 'reactstrap'

const CustomNavLink = (props) => {
    if (props.to) {
        return (
            <Link
                {...props}
                getProps={({ isCurrent }) => {
                    // the object returned here is passed to the
                    // anchor element's props
                    return {
                        className: isCurrent ? 'linkNav-active nav-link' : 'linkNav nav-link',
                        active: isCurrent
                    };
                }}
            />
        )
    } else {
        return (
            <NavLink href={props.href} className='linkNav'>
                {props.children}
            </NavLink>
        )
    }
}

export default CustomNavLink
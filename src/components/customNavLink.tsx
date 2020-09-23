import React from 'react'
import { Link } from 'gatsby'
import { NavLink } from 'reactstrap'

const CustomNavLink = (props) => {
    return (
        <NavLink>
            <Link
                {...props}
                getProps={({ isCurrent }) => {
                    // the object returned here is passed to the
                    // anchor element's props
                    return {
                        className: isCurrent ? 'linkNav-active' : 'linkNav',
                        active: isCurrent
                    };
                }}
            />
        </NavLink>
    )
}

export default CustomNavLink
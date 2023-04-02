import React, { ReactElement } from 'react';
import { Location } from '@reach/router';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import { PageState } from '../typescript';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Link = ({ children, to, state, ref, ...other }: GatsbyLinkProps<PageState>): ReactElement => {
    // Tailor the following test to your environment.
    // This example assumes that any internal link (intended for Gatsby)
    // will start with exactly one slash, and that anything else is external.
    const internal = /^\/(?!\/)/.test(to);

    // Use Gatsby Link for internal links, and <a> for others
    if (internal) {
        return (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            /* @ts-ignore */
            <Location>
                {({ location }): ReactElement => (
                    <GatsbyLink
                        {...other}
                        to={to}
                        // make sure user's state is not overwritten
                        state={{ prevPathname: location.pathname, ...state }}
                    >
                        {children}
                    </GatsbyLink>
                )}
            </Location>
        );
    }
    return (
        <a href={to} {...other}>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            {children}
        </a>
    );
};

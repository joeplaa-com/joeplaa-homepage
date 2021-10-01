/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { ReactElement, useEffect, useState } from 'react';
import RenderLoader from './renderLoader';

const Placeholder = (): ReactElement => <RenderLoader />;

const LazyAppStoreBadge = (props: JSX.IntrinsicAttributes): ReactElement => {
    // While the component is loading, we'll render a fallback placeholder.
    // (The Placeholder is a component that renders nothing).
    const [Component, setComponent] = useState(() => Placeholder);
    // After the initial render, kick off a dynamic import to fetch
    // the real component, and set it into our state.
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        import('../svg/app-store-badge.svg').then(Thing => setComponent(() => Thing.default));
    }, []);
    return <Component {...props} />;
};

export default LazyAppStoreBadge;

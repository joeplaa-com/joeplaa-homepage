import React, { ReactElement, useEffect, useState } from 'react';
import RenderLoader from './renderLoader';

const Placeholder = (): ReactElement => <RenderLoader />;

const LazyGooglePlayBadge = (props: JSX.IntrinsicAttributes): ReactElement => {
    // While the component is loading, we'll render a fallback placeholder.
    // (The Placeholder is a component that renders nothing).
    const [Component, setComponent] = useState(() => Placeholder);
    // After the initial render, kick off a dynamic import to fetch
    // the real component, and set it into our state.
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        import('../svg/google-play-badge.svg').then(Thing => setComponent(() => Thing.default));
    }, []);
    return <Component {...props} />;
};

export default LazyGooglePlayBadge;
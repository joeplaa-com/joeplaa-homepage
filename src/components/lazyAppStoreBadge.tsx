import React from 'react'
import RenderLoader from './renderLoader'

const Placeholder = () => <RenderLoader />
const LazyAppStoreBadge = props => {
    // While the component is loading, we'll render a fallback placeholder.
    // (The Placeholder is a component that renders nothing).
    const [Component, setComponent] = React.useState(() => Placeholder)
    // After the initial render, kick off a dynamic import to fetch
    // the real component, and set it into our state.
    React.useEffect(() => {
        import("../svg/app-store-badge.svg").then(Thing => setComponent(() => Thing.default))
    }, [])
    return <Component {...props} />
}
export default LazyAppStoreBadge
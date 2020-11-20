// https://stackoverflow.com/questions/61967988/how-to-create-page-with-parameters-in-gatsbyjs-dynamically
import { wrapRootElement as wrap } from './root-wrapper'

export const wrapRootElement = wrap;

export const onRouteUpdate = ({ location, prevLocation }) => {
    // https://stackoverflow.com/a/58524372
    if (location && location.state) {
        location.state.referrer = prevLocation ? prevLocation.pathname : null
    }

    console.log(`new pathname (location.pathname: `, location.pathname)
    console.log(`old pathname (prevLocation.pathname): `, prevLocation ? prevLocation.pathname : null)
}
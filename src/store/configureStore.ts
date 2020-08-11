import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducers } from './';
import { initialApplicationState } from './reducers/application';

export default function configureStore() {
    const rootReducer = combineReducers({
        ...reducers
    });

    const enhancers = [];
    const windowIfDefined = typeof window === 'undefined' ? null : window as any;
    if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
        enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
    }

    return createStore(
        rootReducer,
        {
            application: initialApplicationState
        },
        compose(applyMiddleware(), ...enhancers)
    );
}

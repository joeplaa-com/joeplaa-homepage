import { Action, Reducer } from 'redux';
import { IApplicationState } from '../interfaces';
import { KnownAction } from '../actions/application';

// We support Blink (Brave, Chrome, Chromium, current Edge, current Opera), Gecko (Firefox) and WebKit (Safari) based browsers
const supportedBrowsers = ['Chrome', 'Chromium', 'Edge', 'EdgeChromium', 'Firefox', 'Safari', 'Mobile Safari'];
// We don't support Trident (Internet Explorer), EdgeHTML (old Edge) and Presto (old Opera) based browsers
const unsupportedBrowsers = ['Internet Explorer', 'IE'];

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const initialApplicationState: IApplicationState = {
    isSupported: undefined,
    showModal: false,
    setModal: undefined,
    filter: {
        blog: [],
        howto: [],
        portfolio: [],
        recommended: []
    },
    initialFilter: {
        blog: [],
        howto: [],
        portfolio: [],
        recommended: []
    }
};

export const applicationReducer: Reducer<IApplicationState> = (state: IApplicationState | undefined, incomingAction: Action): IApplicationState => {
    if (state === undefined) {
        return initialApplicationState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
    case 'SET_BROWSER':
        if (supportedBrowsers.includes(action.browser)) {
            return {
                ...state,
                isSupported: true,
                showModal: false
            };
        } else if (unsupportedBrowsers.includes(action.browser)) {
            return {
                ...state,
                isSupported: false,
                showModal: true
            };
        } else {
            return {
                ...state,
                isSupported: false,
                showModal: false
            };
        }
    case 'HIDE_BROWSER_MODAL':
        return {
            ...state,
            showModal: false,
            setModal: new Date()
        };
    case 'SHOW_BROWSER_MODAL':
        return {
            ...state,
            showModal: true,
            setModal: undefined
        };
    case 'ADD_TAG_FILTER':
        switch (action.page) {
        case 'blog':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    blog: [...state.filter.blog, action.tag]
                }
            };
        case 'howto':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    howto: [...state.filter.howto, action.tag]
                }
            };
        case 'portfolio':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    portfolio: [...state.filter.portfolio, action.tag]
                }
            };
        case 'recommended':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    recommended: [...state.filter.recommended, action.tag]
                }
            };
        }
        break;
    case 'REMOVE_TAG_FILTER':
        switch (action.page) {
        case 'blog':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    blog: state.filter.blog.filter(tag => tag.value !== action.tag.value)
                }
            };
        case 'howto':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    howto: state.filter.howto.filter(tag => tag.value !== action.tag.value)
                }
            };
        case 'portfolio':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    portfolio: state.filter.portfolio.filter(tag => tag.value !== action.tag.value)
                }
            };
        case 'recommended':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    recommended: state.filter.recommended.filter(tag => tag.value !== action.tag.value)
                }
            };
        }
        break;
    case 'SET_TAGS_FILTER':
        switch (action.page) {
        case 'blog':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    blog: action.tags
                }
            };
        case 'howto':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    howto: action.tags
                }
            };
        case 'portfolio':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    portfolio: action.tags
                }
            };
        case 'recommended':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    recommended: action.tags
                }
            };
        }
        break;
    case 'ADD_TAGS_FILTER':
        switch (action.page) {
        case 'blog':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    blog: [...action.tags]
                },
                initialFilter: {
                    ...state.initialFilter,
                    blog: [...action.tags]
                }
            };
        case 'howto':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    howto: [...action.tags]
                },
                initialFilter: {
                    ...state.initialFilter,
                    howto: [...action.tags]
                }
            };
        case 'portfolio':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    portfolio: [...action.tags]
                },
                initialFilter: {
                    ...state.initialFilter,
                    portfolio: [...action.tags]
                }
            };
        case 'recommended':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    recommended: [...action.tags]
                },
                initialFilter: {
                    ...state.initialFilter,
                    recommended: [...action.tags]
                }
            };
        }
        break;
    case 'RESET_TAG_FILTER':
        return {
            ...state,
            filter: state.initialFilter
        };
    case 'DESTROY_SESSION':
        return {
            ...initialApplicationState
        };
    }

    return state;
};

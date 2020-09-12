import { Action, Reducer } from 'redux';
import { IFilterState } from '../interfaces';
import { KnownAction } from '../actions/filter';

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const initialFilterState: IFilterState = {
    userFilter: {
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

export const filterReducer: Reducer<IFilterState> = (state: IFilterState | undefined, incomingAction: Action): IFilterState => {
    if (state === undefined) {
        return initialFilterState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
    case 'ADD_TAG_FILTER':
        switch (action.page) {
        case 'blog':
            return {
                ...state,
                userFilter: {
                    ...state.userFilter,
                    blog: [...state.userFilter.blog, action.tag]
                }
            };
        case 'howto':
            return {
                ...state,
                userFilter: {
                    ...state.userFilter,
                    howto: [...state.userFilter.howto, action.tag]
                }
            };
        case 'portfolio':
            return {
                ...state,
                userFilter: {
                    ...state.userFilter,
                    portfolio: [...state.userFilter.portfolio, action.tag]
                }
            };
        case 'recommended':
            return {
                ...state,
                userFilter: {
                    ...state.userFilter,
                    recommended: [...state.userFilter.recommended, action.tag]
                }
            };
        }
        break;
    case 'REMOVE_TAG_FILTER':
        switch (action.page) {
        case 'blog':
            return {
                ...state,
                userFilter: {
                    ...state.userFilter,
                    blog: state.userFilter.blog.filter(tag => tag.value !== action.tag.value)
                }
            };
        case 'howto':
            return {
                ...state,
                userFilter: {
                    ...state.userFilter,
                    howto: state.userFilter.howto.filter(tag => tag.value !== action.tag.value)
                }
            };
        case 'portfolio':
            return {
                ...state,
                userFilter: {
                    ...state.userFilter,
                    portfolio: state.userFilter.portfolio.filter(tag => tag.value !== action.tag.value)
                }
            };
        case 'recommended':
            return {
                ...state,
                userFilter: {
                    ...state.userFilter,
                    recommended: state.userFilter.recommended.filter(tag => tag.value !== action.tag.value)
                }
            };
        }
        break;
    case 'SET_TAGS_FILTER':
        switch (action.page) {
        case 'blog':
            return {
                ...state,
                userFilter: {
                    ...state.userFilter,
                    blog: action.tags
                }
            };
        case 'howto':
            return {
                ...state,
                userFilter: {
                    ...state.userFilter,
                    howto: action.tags
                }
            };
        case 'portfolio':
            return {
                ...state,
                userFilter: {
                    ...state.userFilter,
                    portfolio: action.tags
                }
            };
        case 'recommended':
            return {
                ...state,
                userFilter: {
                    ...state.userFilter,
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
                userFilter: {
                    ...state.userFilter,
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
                userFilter: {
                    ...state.userFilter,
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
                userFilter: {
                    ...state.userFilter,
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
                userFilter: {
                    ...state.userFilter,
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
            userFilter: state.initialFilter
        };
    }
    return state;
};

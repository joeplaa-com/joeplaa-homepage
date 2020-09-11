// ----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface SetBrowserAction {
    type: 'SET_BROWSER';
    browser: string;
}

interface HideBrowserModal {
    type: 'HIDE_BROWSER_MODAL';
}

interface ShowBrowserModal {
    type: 'SHOW_BROWSER_MODAL';
}

interface AddTagFilter {
    type: 'ADD_TAG_FILTER'
    page: string
    name: string
}

interface RemoveTagFilter {
    type: 'REMOVE_TAG_FILTER'
    page: string
    name: string
}

interface SetTagFilter {
    type: 'SET_TAG_FILTER'
    page: string
    name: string
}

interface ClearTagFilter {
    type: 'CLEAR_TAG_FILTER'
}

interface DestroySession {
    type: 'DESTROY_SESSION';
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
export type KnownAction = SetBrowserAction | HideBrowserModal | ShowBrowserModal | AddTagFilter | RemoveTagFilter | SetTagFilter | ClearTagFilter | DestroySession

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const applicationActionCreators = {
    setBrowser: (browserName: string) => ({ type: 'SET_BROWSER', browser: browserName }),
    hideBrowserModal: () => ({ type: 'HIDE_BROWSER_MODAL' }),
    showBrowserModal: () => ({ type: 'SHOW_BROWSER_MODAL' }),
    addTagFilter: (page, tag) => ({ type: 'ADD_TAG_FILTER', page: page, name: tag }),
    removeTagFilter: (page, tag) => ({ type: 'REMOVE_TAG_FILTER', page: page, name: tag }),
    setTagFilter: (page, tag) => ({ type: 'SET_TAG_FILTER', page: page, name: tag }),
    clearTagFilter: () => ({ type: 'CLEAR_TAG_FILTER' }),
    destroySession: () => ({ type: 'DESTROY_SESSION' }),
};

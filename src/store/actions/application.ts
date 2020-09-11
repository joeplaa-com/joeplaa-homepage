// ----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

import { LabelProps } from '../../types'

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
    tag: LabelProps
}
interface AddTagsFilter {
    type: 'ADD_TAGS_FILTER'
    page: string
    tags: Array<LabelProps>
}


interface RemoveTagFilter {
    type: 'REMOVE_TAG_FILTER'
    page: string
    tag: LabelProps
}

interface SetTagsFilter {
    type: 'SET_TAGS_FILTER'
    page: string
    tags: Array<LabelProps>
}

interface ResetTagFilter {
    type: 'RESET_TAG_FILTER'
}

interface DestroySession {
    type: 'DESTROY_SESSION';
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
export type KnownAction = SetBrowserAction | HideBrowserModal | ShowBrowserModal | AddTagFilter | AddTagsFilter | RemoveTagFilter | SetTagsFilter | ResetTagFilter | DestroySession

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const applicationActionCreators = {
    setBrowser: (browserName: string) => ({ type: 'SET_BROWSER', browser: browserName }),
    hideBrowserModal: () => ({ type: 'HIDE_BROWSER_MODAL' }),
    showBrowserModal: () => ({ type: 'SHOW_BROWSER_MODAL' }),
    addTagFilter: (page: string, tag: LabelProps) => ({ type: 'ADD_TAG_FILTER', page: page, tag: tag }),
    addTagsFilter: (page: string, tags: Array<LabelProps>) => ({ type: 'ADD_TAGS_FILTER', page: page, tags: tags }),
    removeTagFilter: (page: string, tag: LabelProps) => ({ type: 'REMOVE_TAG_FILTER', page: page, tag: tag }),
    clearTagFilter: () => ({ type: 'REMOVE_TAG_FILTER' }),
    setTagsFilter: (page: string, tags: Array<LabelProps>) => ({ type: 'SET_TAGS_FILTER', page: page, tags: tags }),
    resetTagFilter: () => ({ type: 'RESET_TAG_FILTER' }),
    destroySession: () => ({ type: 'DESTROY_SESSION' }),
};

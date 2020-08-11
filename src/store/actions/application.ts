import { AppThunkAction } from '../index';

// ----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface SetBrowserAction {
    type: 'SET_BROWSER';
    browser: string;
}

interface HideModal {
    type: 'HIDE_MODAL';
}

interface ShowModal {
    type: 'SHOW_MODAL';
}

interface DestroySession {
    type: 'DESTROY_SESSION';
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
export type KnownAction = SetBrowserAction | HideModal | ShowModal | DestroySession

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const applicationActionCreators = {
    setBrowser: (browserName: string): AppThunkAction<KnownAction> => (dispatch) => {
        dispatch({ type: 'SET_BROWSER', browser: browserName });
    },
    hideModal: (): AppThunkAction<KnownAction> => (dispatch) => {
        dispatch({ type: 'HIDE_MODAL' });
    },
    showModal: (): AppThunkAction<KnownAction> => (dispatch) => {
        dispatch({ type: 'SHOW_MODAL' });
    },
};

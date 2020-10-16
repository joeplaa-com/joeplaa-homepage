import { Action, Reducer } from 'redux'
import { IFilterState } from '../interfaces'
import { KnownAction } from '../actions/filter'
import sortArrayObject from '../../utils/sortArrayObject'

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const initialFilterState: IFilterState = {
    selectedTags: {
        'howto': [],
        'portfolio': []
    }
};

export const filterReducer: Reducer<IFilterState> = (state: IFilterState | undefined, incomingAction: Action): IFilterState => {
    if (state === undefined) {
        return initialFilterState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
    case 'SET_TAGS_FILTER':
        switch (action.page) {
        case 'howto':
            return {
                ...state,
                selectedTags: {
                    ...state.selectedTags,
                    howto: sortArrayObject(action.tags)
                }
            };
        case 'portfolio':
            return {
                ...state,
                selectedTags: {
                    ...state.selectedTags,
                    portfolio: sortArrayObject(action.tags)
                }
            };
        }
        return state;
    }
};

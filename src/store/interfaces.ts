// -----------------
// STATE - This defines the type of data maintained in the Redux store.
import { LabelProps } from '../types'

export interface IApplicationState {
    isSupported: boolean | undefined;
    showModal: boolean;
    setModal: Date | undefined;
}
export interface IFilterState {
    userFilter: {
        '/howto': Array<LabelProps>,
        '/portfolio': Array<LabelProps>
    }
    initialFilter: {
        '/howto': Array<LabelProps>,
        '/portfolio': Array<LabelProps>
    }
}

export interface IRootState {
    application: IApplicationState | undefined;
    filter: IFilterState | undefined;
}

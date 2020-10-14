// -----------------
// STATE - This defines the type of data maintained in the Redux store.
import { LabelProps } from '../types'

export interface IFilterState {
    userFilter: {
        [howto: string]: Array<LabelProps>,
        portfolio: Array<LabelProps>
    }
    initialFilter: {
        [howto: string]: Array<LabelProps>,
        portfolio: Array<LabelProps>
    }
}

export interface IRootState {
    filter: IFilterState;
}

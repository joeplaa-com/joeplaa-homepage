// -----------------
// STATE - This defines the type of data maintained in the Redux store.
import { LabelProps } from '../types'

export interface IFilterState {
    selectedTags: {
        [howto: string]: Array<LabelProps>,
        portfolio: Array<LabelProps>
    }
}

export interface IRootState {
    filter: IFilterState;
}

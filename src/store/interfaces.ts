// -----------------
// STATE - This defines the type of data maintained in the Redux store.
import { LabelProps } from '../types'

export interface IApplicationState {
    isSupported: boolean | undefined;
    showModal: boolean;
    setModal: Date | undefined;
    filter: {
        blog: Array<LabelProps>,
        howto: Array<LabelProps>,
        portfolio: Array<LabelProps>,
        recommended: Array<LabelProps>
    }
    initialFilter: {
        blog: Array<LabelProps>,
        howto: Array<LabelProps>,
        portfolio: Array<LabelProps>,
        recommended: Array<LabelProps>
    }
}

export interface IRootState {
    application: IApplicationState | undefined;
}

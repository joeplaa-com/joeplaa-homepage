// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface IApplicationState {
    isSupported: boolean | undefined;
    showModal: boolean;
    setModal: Date | undefined;
    filter: {
        blog: Array<string>,
        howto: Array<string>,
        portfolio: Array<string>,
        recommended: Array<string>
    }
}

export interface IRootState {
    application: IApplicationState | undefined;
}

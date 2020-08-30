// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface IApplicationState {
    isSupported: boolean | undefined;
    showModal: boolean;
    setModal: Date | undefined;
}

export interface IRootState {
    application: IApplicationState | undefined;
}

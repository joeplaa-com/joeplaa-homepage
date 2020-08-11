

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface ApplicationState {
    isDetected: boolean
    isSupported: boolean
    isUnsupported: boolean
    isLoading: boolean
}

export interface RootState {
    application: ApplicationState | undefined;
}

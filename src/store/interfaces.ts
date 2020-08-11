import { iconComponents } from '../components/SocialButtons';

export interface ISocialButton {
    name: keyof typeof iconComponents;
    value: string;
    link: string;
}

export interface ISettings {
    social: ISocialButton[];
}

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

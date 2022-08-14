export function validateEmail(email: string): boolean {
    const regExEmail = /[a-z\d!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z\d!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z\d](?:[a-z\d-]*[a-z\d])?\.)+[a-z\d](?:[a-z\d-]*[a-z\d])?/;
    return regExEmail.test(String(email).toLowerCase());
}

export const checkNameError = (name: string): boolean => {
    if (name === '') {
        return true;
    } else {
        return false;
    }
};

export const checkEmailError = (email: string): boolean => {
    if (email === '' || !validateEmail(email)) {
        return true;
    } else {
        return false;
    }
};

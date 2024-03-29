import { checkEmailError, checkNameError, validateEmail } from './checkForm';

describe('validateEmail', () => {
    test('Valid entries', () => {
        // random address
        expect(validateEmail('test@test.nl')).toBe(true);
        // minimum input
        expect(validateEmail('j@j.c')).toBe(true);
        // hotmail.com
        expect(validateEmail('kapster@hotmail.com')).toBe(true);
        // gmail.com
        expect(validateEmail('schoonheid@gmail.com')).toBe(true);
        // live.com
        expect(validateEmail('massages@live.com')).toBe(true);
        // ziggo.nl
        expect(validateEmail('nagels@ziggo.nl')).toBe(true);
    });

    test('Invalid entries', () => {
        // empty
        expect(validateEmail('')).toBe(false);
        // space
        expect(validateEmail(' ')).toBe(false);
        // space inside
        expect(validateEmail('test test@test')).toBe(false);
        // space around
        expect(validateEmail(' testtest@test ')).toBe(false);
        // no name
        expect(validateEmail('@test.nl')).toBe(false);
        // no domain name
        expect(validateEmail('test@.nl')).toBe(false);
        // no top level domain
        expect(validateEmail('test@test')).toBe(false);
        expect(validateEmail('test@test.')).toBe(false);
        // no domain name and top level domain
        expect(validateEmail('test@')).toBe(false);
        // no name and domain name
        expect(validateEmail('@.nl')).toBe(false);
        // no name and top level domain
        expect(validateEmail('@test')).toBe(false);
    });
});

describe('checkNameError', () => {
    test('name is empty string', () => {
        expect(checkNameError('')).toBe(true);
    });

    test('name is valid', () => {
        expect(checkNameError('Test')).toBe(false);
    });
});

describe('checkEmailError', () => {
    test('email is empty string', () => {
        expect(checkEmailError('')).toBe(true);
    });

    test('email is invalid', () => {
        // see validateEmail test above
        expect(checkEmailError('')).toBe(true);
    });

    test('email is valid', () => {
        // see validateEmail test above
        expect(checkEmailError('test@test.nl')).toBe(false);
    });
});

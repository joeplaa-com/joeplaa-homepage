/* eslint-disable compat/compat */
import index from './index';
import AWSMock from 'aws-sdk-mock';
import AWS from 'aws-sdk';
import path from 'path';

AWSMock.setSDK(path.resolve(__dirname, '../../node_modules/aws-sdk')); // https://github.com/dwyl/aws-sdk-mock/issues/145

const mockSendMail = jest.fn().mockImplementation(() => Promise.resolve({ MessageId: 1 }));

afterEach(() => {
    jest.clearAllMocks();
    AWSMock.restore('SES');
});

beforeEach(() => {
    AWSMock.setSDKInstance(AWS);
    AWSMock.mock('SES', 'sendEmail', mockSendMail);
});

describe('index test methods', () => {
    it('Valid OPTIONS method should return response 200 with emtpy body', async () => {
        const event = {
            httpMethod: 'OPTIONS',
            headers: { origin: 'https://jodibooks.com' /* spoof domain by adding the `origin` header */ },
            body: JSON.stringify({
                email: 'joep@jodibooks.com',
                name: 'Joep',
                message: 'Dit is een test bericht.'
            })
        };

        const response = await index.handler(event);
        expect(response).toMatchObject({
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': 'https://jodibooks.com',
                'Access-Control-Allow-Methods': 'OPTIONS,POST',
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: undefined
        });
        expect(mockSendMail).not.toHaveBeenCalled();
    });

    it('Valid POST method should return response 200 with body \'{ status: "OK" }\'', async () => {
        const event = {
            httpMethod: 'POST',
            headers: { origin: 'https://jodibooks.com' /* spoof domain by adding the `origin` header */ },
            body: JSON.stringify({
                email: 'joep@jodibooks.com',
                name: 'Joep',
                message: 'Dit is een test bericht.'
            })
        };

        const response = await index.handler(event);
        expect(response).toMatchObject({
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': 'https://jodibooks.com',
                'Access-Control-Allow-Methods': 'OPTIONS,POST',
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 'OK' })
        });
        expect(mockSendMail).toHaveBeenCalledTimes(2);
    });

    it('Invalid methods should return response 405 with body \'Method Not Allowed\'', async () => {
        const event = {
            httpMethod: 'GET',
            headers: { origin: 'https://jodibooks.com' /* spoof domain by adding the `origin` header */ },
            body: JSON.stringify({
                email: 'joep@jodibooks.com',
                name: 'Joep',
                message: 'Dit is een test bericht.'
            })
        };

        const response = await index.handler(event);
        expect(response).toMatchObject({
            statusCode: 405,
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': 'https://jodibooks.com',
                'Access-Control-Allow-Methods': 'OPTIONS,POST',
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: 'Method Not Allowed'
        });
        expect(mockSendMail).not.toHaveBeenCalled();
    });
});

describe('index test domains', () => {
    it('Valid http domain (http://dev.jodibooks.com:3003) should return response 200 with body \'{ status: "OK" }\'', async () => {
        const event = {
            httpMethod: 'POST',
            headers: { origin: 'http://dev.jodibooks.com:3003' /* spoof domain by adding the `origin` header */ },
            body: JSON.stringify({
                email: 'joep@jodibooks.com',
                name: 'Joep',
                message: 'Dit is een test bericht.'
            })
        };

        const response = await index.handler(event);
        expect(response).toMatchObject({
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': 'http://dev.jodibooks.com:3003',
                'Access-Control-Allow-Methods': 'OPTIONS,POST',
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 'OK' })
        });
        expect(mockSendMail).toHaveBeenCalledTimes(2);
    });

    it('Valid https domain (https://www.jodibooks.com) should return response 200 with body \'{ status: "OK" }\'', async () => {
        const event = {
            httpMethod: 'POST',
            headers: { origin: 'https://www.jodibooks.com' /* spoof domain by adding the `origin` header */ },
            body: JSON.stringify({
                email: 'joep@jodibooks.com',
                name: 'Joep',
                message: 'Dit is een test bericht.'
            })
        };

        const response = await index.handler(event);
        expect(response).toMatchObject({
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': 'https://www.jodibooks.com',
                'Access-Control-Allow-Methods': 'OPTIONS,POST',
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 'OK' })
        });
        expect(mockSendMail).toHaveBeenCalledTimes(2);
    });

    it('Valid https domain without subdomain (https://jodibooks.com) should return response 200 with body \'{ status: "OK" }\'', async () => {
        const event = {
            httpMethod: 'POST',
            headers: { origin: 'https://jodibooks.com' /* spoof domain by adding the `origin` header */ },
            body: JSON.stringify({
                email: 'joep@jodibooks.com',
                name: 'Joep',
                message: 'Dit is een test bericht.'
            })
        };

        const response = await index.handler(event);
        expect(response).toMatchObject({
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': 'https://jodibooks.com',
                'Access-Control-Allow-Methods': 'OPTIONS,POST',
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 'OK' })
        });
        expect(mockSendMail).toHaveBeenCalledTimes(2);
    });

    it('Invalid domain should return response 400 with body \'{ error: "DOMAIN_NOT_ALLOWED" }\'', async () => {
        const event = {
            httpMethod: 'POST',
            headers: { origin: 'http://i.want.access' /* spoof domain by adding the `origin` header */ },
            body: JSON.stringify({
                email: 'joep@jodibooks.com',
                name: 'Joep',
                message: 'Dit is een test bericht.'
            })
        };

        const response = await index.handler(event);
        expect(response).toMatchObject({
            statusCode: 400,
            headers: {},
            body: JSON.stringify({ error: 'DOMAIN_NOT_ALLOWED' })
        });
        expect(mockSendMail).not.toHaveBeenCalled();
    });
});

describe('index test content', () => {
    it('Valid data should return response 200 with body \'{ status: "OK" }\'', async () => {
        const event = {
            httpMethod: 'POST',
            headers: { origin: 'http://dev.jodibooks.com' /* spoof domain by adding the `origin` header */ },
            body: JSON.stringify({
                email: 'joep@jodibooks.com',
                name: 'Joep',
                message: 'Dit is een test bericht.'
            })
        };

        const response = await index.handler(event);
        expect(response).toMatchObject({
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': 'http://dev.jodibooks.com',
                'Access-Control-Allow-Methods': 'OPTIONS,POST',
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 'OK' })
        });
        expect(mockSendMail).toHaveBeenCalledTimes(2);
    });

    it('Valid data should return response 200 with body \'{ status: "OK" }\'', async () => {
        const event = {
            httpMethod: 'POST',
            headers: { origin: 'http://dev.jodibooks.com' /* spoof domain by adding the `origin` header */ },
            body: JSON.stringify({
                email: 'test@jodibooks.com',
                name: 'Joep',
                message: 'Dit is een test bericht.'
            })
        };

        const response = await index.handler(event);
        expect(response).toMatchObject({
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': 'http://dev.jodibooks.com',
                'Access-Control-Allow-Methods': 'OPTIONS,POST',
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 'OK' })
        });
        expect(mockSendMail).toHaveBeenCalledTimes(2);
    });

    it('Invalid email should return response 400 with body \'{ error: "EMAIL_INVALID" }\'', async () => {
        const event = {
            httpMethod: 'POST',
            headers: { origin: 'http://dev.jodibooks.com' /* spoof domain by adding the `origin` header */ },
            body: JSON.stringify({
                email: 'joepjodibooks.com',
                name: 'Joep',
                message: 'Dit is een test bericht.'
            })
        };

        const response = await index.handler(event);
        expect(response).toMatchObject({
            statusCode: 400,
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': 'http://dev.jodibooks.com',
                'Access-Control-Allow-Methods': 'OPTIONS,POST',
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ error: 'EMAIL_INVALID' })
        });
        expect(mockSendMail).not.toHaveBeenCalled();
    });

    it('No email should return response 400 with body \'{ error: "EMAIL_REQUIRED" }\'', async () => {
        const event = {
            httpMethod: 'POST',
            headers: { origin: 'http://dev.jodibooks.com' /* spoof domain by adding the `origin` header */ },
            body: JSON.stringify({
                email: '',
                name: 'Joep',
                message: 'Dit is een test bericht.'
            })
        };

        const response = await index.handler(event);
        expect(response).toMatchObject({
            statusCode: 400,
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': 'http://dev.jodibooks.com',
                'Access-Control-Allow-Methods': 'OPTIONS,POST',
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ error: 'EMAIL_REQUIRED' })
        });
        expect(mockSendMail).not.toHaveBeenCalled();
    });

    it('No name should return response 400 with body \'{ error: "NAME_REQUIRED" }\'', async () => {
        const event = {
            httpMethod: 'POST',
            headers: { origin: 'http://dev.jodibooks.com' /* spoof domain by adding the `origin` header */ },
            body: JSON.stringify({
                email: 'joep@jodibooks.com',
                name: '',
                message: 'Dit is een test bericht.'
            })
        };

        const response = await index.handler(event);
        expect(response).toMatchObject({
            statusCode: 400,
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': 'http://dev.jodibooks.com',
                'Access-Control-Allow-Methods': 'OPTIONS,POST',
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ error: 'NAME_REQUIRED' })
        });
        expect(mockSendMail).not.toHaveBeenCalled();
    });

    it('No message should return response 400 with body \'{ error: "MESSAGE_REQUIRED" }\'', async () => {
        const event = {
            httpMethod: 'POST',
            headers: { origin: 'http://dev.jodibooks.com' /* spoof domain by adding the `origin` header */ },
            body: JSON.stringify({
                email: 'joep@jodibooks.com',
                name: 'Joep',
                message: ''
            })
        };

        const response = await index.handler(event);
        expect(response).toMatchObject({
            statusCode: 400,
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': 'http://dev.jodibooks.com',
                'Access-Control-Allow-Methods': 'OPTIONS,POST',
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ error: 'MESSAGE_REQUIRED' })
        });
        expect(mockSendMail).not.toHaveBeenCalled();
    });
});

/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const AWS = require('aws-sdk');

const receiveEmail = require('./receiveEmail');
const confirmEmail = require('./confirmEmail');

exports.handler = async (event) => {
    const ses = new AWS.SES({ region: process.env.REGION });
    const regex = /joeplaa.com/g; // allowed domains (CORS)
    const methods = ['OPTIONS', 'POST']; // allowed methods
    const body = JSON.parse(event.body);
    const domain = event.headers.origin; // the domain is send as header `origin`
    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': domain.match(regex) ? domain : 'https://joeplaa.com', // CORS only allows a single allowed domain in the header. To circumvent this restriction we change it depending on the source of the request. If it comes from *.joeplaa.com, it is allowed. The browser will block all other domains as they are not https://joeplaa.com.
            'Access-Control-Allow-Methods': 'OPTIONS,POST',
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: undefined
    };

    // filter methods
    if (!methods.includes(event.httpMethod)) {
        console.log('Not sending: method not allowed', event);
        response.statusCode = 405;
        response.body = 'Method Not Allowed';
        return response;
    } else if (event.httpMethod === 'OPTIONS') {
        return response;
    }

    // filter domains
    if (!domain.match(regex)) {
        console.log('Not sending: domain not allowed', event);
        response.statusCode = 400;
        response.headers = {};
        response.body = JSON.stringify({
            error: 'DOMAIN_NOT_ALLOWED'
        });
        return response;
    }

    // filter no email addresses
    if (body.email === '') {
        console.log('Not sending: no email address', event);
        response.statusCode = 400;
        response.body = JSON.stringify({
            error: 'EMAIL_REQUIRED'
        });
        return response;
    }

    // filter invalid email addresses
    if (!body.email.match(/[a-z\d!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z\d!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z\d](?:[a-z\d-]*[a-z\d])?\.)+[a-z\d](?:[a-z\d-]*[a-z\d])?/)) {
        console.log('Not sending: invalid email address', event);
        response.statusCode = 400;
        response.body = JSON.stringify({
            error: 'EMAIL_INVALID'
        });
        return response;
    }

    // filter no name
    if (body.name === '') {
        console.log('Not sending: no name', event);
        response.statusCode = 400;
        response.body = JSON.stringify({
            error: 'NAME_REQUIRED'
        });
        return response;
    }

    // filter no name
    if (body.message === '') {
        console.log('Not sending: no message', event);
        response.statusCode = 400;
        response.body = JSON.stringify({
            error: 'MESSAGE_REQUIRED'
        });
        return response;
    }

    await ses.sendEmail(confirmEmail(body)).promise()
        .then(() => {
            response.body = {
                status: 'OK'
            };
        })
        .catch(err => {
            console.error(err, err.stack);
            response.statusCode = 500;
            response.body = {
                error: err.stack
            };
        });

    await ses.sendEmail(receiveEmail(body, domain)).promise()
        .then(() => {
            response.body = {
                status: 'OK'
            };
        })
        .catch(err => {
            console.error(err, err.stack);
            response.statusCode = 500;
            response.body = {
                error: err.stack
            };
        });

    response.body = JSON.stringify(response.body); // https://stackoverflow.com/a/53392346
    // console.log(response);
    return response;
};

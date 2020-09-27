/* eslint-disable @typescript-eslint/no-var-requires */
const aws = require('aws-sdk')
const ses = new aws.SES()

module.exports = () => {
    const myEmail = process.env.EMAIL; // myEmail is the email address you enabled in AWS SES in the AWS Console
    const myDomain = process.env.DOMAIN; // add the domain of your website or '*' if you want to accept requests from any domain

    function generateResponse(code, payload) {
        return {
            statusCode: code,
            headers: {
                'Access-Control-Allow-Origin': myDomain,
                'Access-Control-Allow-Headers': 'x-requested-with',
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify(payload)
        }
    }
    function generateError(code, err) {
        console.log(err)
        return {
            statusCode: code,
            headers: {
                'Access-Control-Allow-Origin': myDomain,
                'Access-Control-Allow-Headers': 'x-requested-with',
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify(err.message)
        }
    }
    function generateEmailParamsFromJSON(body) {
        const { name, business, email, message, staticDesign, dynamicDesign, cmsDesign, customDesign, staticHosting, dynamicHosting } = JSON.parse(body)
        if (!(email && name && message)) {
            throw new Error('Missing parameters! Make sure to add parameters \'email\', \'name\', \'message\'.')
        }

        return {
            Source: myEmail,
            Destination: { ToAddresses: [myEmail] },
            ReplyToAddresses: [email],
            Message: {
                Body: {
                    Text: {
                        Charset: 'UTF-8',
                        Data: `You received a message from ${myDomain}!\n\n
                            Name: ${name}\n
                            Business: ${business}\n
                            Email: ${email}\n.
                            Subjects: ${staticDesign ? staticDesign + ', ' : ''}, ${dynamicDesign ? dynamicDesign + ', ' : ''}, ${cmsDesign ? cmsDesign + ', ' : ''}, ${customDesign ? customDesign + ', ' : ''}, ${staticHosting ? staticHosting + ', ' : ''}, ${dynamicHosting ? dynamicHosting + ', ' : ''}\n
                            Message: \n${message}`
                    }
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: `You received a message from ${myDomain}!`
                }
            }
        }
    }

    async function sendJSON(event) {
        try {
            const emailParams = generateEmailParamsFromJSON(event.body)
            const data = await ses.sendEmail(emailParams).promise()
            return generateResponse(200, data)
        } catch (err) {
            return generateError(500, err)
        }
    }

    return {
        sendJSON
    }
}


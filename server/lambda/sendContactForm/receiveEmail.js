const ourEmailAddress = process.env.RECEIVEMAIL; // myEmail is the email address you enabled in AWS SES to receive the contact form emails.

function receiveEmail(body, domain) {
    const { name, email, business, message, website, webshop, webhosting, hosting } = body;
    const params = {
        Destination: {
            ToAddresses: [ourEmailAddress]
        },
        Message: {
            Body: {
                Text: {
                    Charset: 'UTF-8',
                    Data: `${name} ${business ? `(${business}) ` : ''}(${email}) send you a message from ${domain}.\n\nInterested in:\n- ${website ? 'Website' : ''}\n- ${webshop ? 'Webshop' : ''}\n- ${webhosting ? 'Website hosting' : ''}\n- ${hosting ? 'Hosting' : ''}\n\nMessage: \n${message}`
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: `Bericht van ${name} via ${domain}`
            }
        },
        Source: ourEmailAddress,
        ReplyToAddresses: [email]
    };

    return params;
}

module.exports = receiveEmail;

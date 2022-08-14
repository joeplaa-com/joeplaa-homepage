const ourEmailAddress = process.env.REPLYEMAIL; // myEmail is the general email address you have enabled in AWS SES for people to email you.

function confirmEmail(body) {
    const { email, name, message } = body;

    const confirmHeader = `Hi ${name},`;
    const confirmMessage = 'Thanks for sending a message to joeplaa.com. I\'ll get back to you as soon as possible.';
    const confirmFooter1 = 'Thanks,';
    const confirmFooter2 = 'Joep';

    const htmlBody = `<!DOCTYPE html>
<html>
<head>
</head>
<body>
<p>${confirmHeader}</p>
<p>${confirmMessage}</p>
<p>This is a copy of your message:</p>
<p><i>"${message}"</i></p>
<p>${confirmFooter1}<br/>${confirmFooter2}</p>
</body>
</html>`;

    const textBody = `${confirmHeader}
${confirmMessage}
This is a copy of your message:\n${message}
${confirmFooter1}
${confirmFooter2}`;

    const params = {
        Destination: {
            ToAddresses: [email]
        },
        Message: {
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data: htmlBody
                },
                Text: {
                    Charset: 'UTF-8',
                    Data: textBody
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: 'Thanks for you message on joeplaa.com!'
            }

        },
        Source: `joeplaa <${ourEmailAddress}>`,
        ReplyToAddresses: [ourEmailAddress]
    };

    return params;
}

module.exports = confirmEmail;

import confirmEmail from './confirmEmail';

describe('confirmEmail', () => {
    it('Check valid input', () => {
        const email = 'joep@jodibooks.com';
        const name = 'Joep';
        const message = 'Dit is een test bericht.';

        const htmlBody = `<!DOCTYPE html>
<html>
<head>
</head>
<body>
<p>Hoi Joep,</p>
<p>Bedankt voor je interesse in jodiBooks. We hebben je bericht ontvangen en komen hier zo snel mogelijk op terug. Heb je nog meer vragen of opmerkingen, laat het ons weten. Wij helpen je graag.</p>
<p>Dit is een kopie van je bericht:</p>
<p><i>"Dit is een test bericht."</i></p>
<p>Groetjes,<br/>Joep en Diana</p>
<p><table style="font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.42857143; padding-top: 20px;" cellpadding="0" cellspacing="0">
<tr>
<td colspan="6">
<img src="https://cdn.jodibooks.com/mail/v1/mini_banner_white-2x.png" alt="J⋮ jodiBooks" />
</td>
</tr>
<tr>
<td>
<div>App</div>
</td>
<td colspan="4">
<a href="https://api.whatsapp.com/send?phone=31645796599" target="_blank" style="text-decoration:none;">
<img src="https://cdn.jodibooks.com/mail/v1/whatsapp.png" style="padding:10px;" height="30px" alt="💬" />
</a>
<a href="https://t.me/jodibookshq" target="_blank" style="text-decoration:none;">
<img src="https://cdn.jodibooks.com/mail/v1/telegram.png" style="padding:10px;" height="30px" alt="💬" />
</a>
<a href="https://m.me/jodibookshq" target="_blank" style="text-decoration:none;">
<img src="https://cdn.jodibooks.com/mail/v1/messenger.png" style="padding:10px;" height="30px" alt="💬" />
</a>
<a href="sms:31645796599" target="_blank" style="text-decoration:none;">
<img src="https://cdn.jodibooks.com/mail/v1/signal.png" style="padding:10px;" height="30px" alt="💬" />
</a>
</td>
<td>
<div>06 45 79 65 99</div>
<div>m.me/jodibookshq</div>
</td>
</tr>
<tr>
<td>Bel/Mail</td>
<td colspan="4">
<a href="tel:+31850608503" target="_blank" style="text-decoration:none;">
<img src="https://cdn.jodibooks.com/mail/v1/phone.png" style="padding:10px;" height="30px" alt="☎" />
</a>
<a href="mailto:info@jodibooks.com" target="_blank" style="text-decoration:none;">
<img src="https://cdn.jodibooks.com/mail/v1/email.png" style="padding:10px;" height="30px" alt="✉" />
</a>
</td>
<td>
<div>+31 (0)85 06 085 03</div>
<div>
<a href="mailto:info@jodibooks.com" target="_blank">info@jodibooks.com</a>
</div>
</td>
</tr>
</table>
</p>
</body>
</html>`;

        const textBody = 'Hoi Joep,\nBedankt voor je interesse in jodiBooks. We hebben je bericht ontvangen en komen hier zo snel mogelijk op terug. Heb je nog meer vragen of opmerkingen, laat het ons weten. Wij helpen je graag.\nDit is een kopie van je bericht:\nDit is een test bericht.\nGroetjes,\nJoep en Diana\nE-mail: info@jodibooks.com\nTelefoon: +31 (0)85 06 085 03\nWhatsapp: +31 (0)6 45 79 65 99';

        const params = {
            Destination: {
                ToAddresses: ['joep@jodibooks.com']
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
                    Data: 'Bedankt voor je bericht aan jodiBooks!'
                }

            },
            Source: 'jodiBooks <info@jodibooks.com>',
            ReplyToAddresses: ['info@jodibooks.com']
        };

        expect(confirmEmail(email, name, message)).toMatchObject(params);
    });
});

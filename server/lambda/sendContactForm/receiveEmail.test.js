import receiveEmail from './receiveEmail';

describe('receiveEmail', () => {
    it('Check valid input', () => {
        const email = 'joep@jodibooks.com';
        const name = 'Joep';
        const message = 'Dit is een test bericht.';
        const domain = 'dev.jodibooks.com';

        const params = {
            Destination: {
                ToAddresses: ['info@jodibooks.com']
            },
            Message: {
                Body: {
                    Text: {
                        Charset: 'UTF-8',
                        Data: 'Joep (joep@jodibooks.com) heeft je een bericht gestuurd via het contactformulier op dev.jodibooks.com. \n\n Bericht: \n Dit is een test bericht.'
                    }
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: 'Bericht van Joep via dev.jodibooks.com'
                }
            },
            Source: 'info@jodibooks.com',
            ReplyToAddresses: ['joep@jodibooks.com']
        };

        expect(receiveEmail(email, name, message, domain)).toMatchObject(params);
    });
});

export default {
    openGraph: {
        type: 'website',
        url: process.env.NEXT_PUBLIC_URL + '/',
        locale: 'nl_NL',
        site_name: 'joeplaa.com',
        title: 'Het salonpakket dat bijna net zo leuk is als je werk.',
        titleTemplate: 'jodiBooks.com | %s',
        description: 'jodiBooks Beauty is het salonpakket dat bijna net zo leuk is als je werk. Het is namelijk supersimpel. Geen overbodige toeters en bellen waar je voor moet betalen, maar toch nooit gebruikt.',
        images: [
            {
                url: process.env.NEXT_PUBLIC_URL + '/og_logo.png',
                width: 300,
                height: 300,
                alt: 'jodiBooks logo',
            }
        ]
    }
};
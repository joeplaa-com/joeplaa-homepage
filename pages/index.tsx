import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { browserName } from 'react-device-detect';
import Router from 'next/router';
import { LocalBusinessJsonLd } from 'next-seo';
import { applicationActionCreators } from '../src/store/actions/application';

const Index = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(applicationActionCreators.setBrowser(browserName));

        const { pathname } = Router;
        if (pathname === '/') {
            Router.push('/home');
        }
    }, []);

    return (<LocalBusinessJsonLd
        type="ProfessionalService"
        // additionalType="Software"
        id="jodibooks.com"
        name="jodiBooks B.V."
        // legalName="jodiBooks B.V."
        // brand="jodiBooks, jodiBooks Beauty, jodiBeauty"
        description="jodiBooks zorgt ervoor dat het bijhouden van de administratie in de schoonheidssalon zo simpel mogelijk wordt"
        url={process.env.NEXT_PUBLIC_URL}
        telephone="+31407370096"
        address={{
            streetAddress: 'Ir. Kalffstraat 43',
            addressLocality: 'Eindhoven',
            addressRegion: 'North Brabant',
            postalCode: '5617BK',
            addressCountry: 'NL',
        }}
        geo={{
            latitude: '51.4464037',
            longitude: '5.4562051',
        }}
        // logo={[
        //     process.env.NEXT_PUBLIC_URL + '/og_logo.png'
        // ]}
        images={[
            process.env.NEXT_PUBLIC_URL + '/og_logo.png',
            process.env.NEXT_PUBLIC_URL + '/banner_homepage.jpg',
            process.env.NEXT_PUBLIC_URL + '/banner_jodibooks.png',
            process.env.NEXT_PUBLIC_URL + '/banner_jodibooks_beauty.png',
        ]}
        openingHours={[
            {
                opens: '09:00',
                closes: '17:30',
                dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday'
                ],
                validFrom: '2020-01-01',
                validThrough: '2021-31-12',
            },
        ]}
        sameAs={[
            'https://blog.jodibooks.com',
            'https://docs.jodibooks.com',
            'https://www.jodibeauty.com',
            'https://booking.jodibeauty.com',
            'https://shop.jodibeauty.com',
            'https://www.facebook.com/jodibookshq',
            'https://www.instagram.com/jodibookshq',
            'https://www.twitter.com/jodibookshq',
            'https://www.linkedin.com/company/jodibookshq',
            'https://www.pinterest.com/jodibooksHQ',
            'https://www.youtube.com/channel/UCdth9XYVXeNqyva21EBDwVQ',
            'https://www.github.com/jodibooksHQ',
        ]}
    />
    );
};

export default Index;

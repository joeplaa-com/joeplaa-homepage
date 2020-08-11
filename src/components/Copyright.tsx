import React from 'react';
import nl from '../data/nl.json';
import settings from '../data/settings.json';

const Copyright = () => {
    return (
        <p style={{ textAlign: "center" }}>
            {'© '}<a className="text-light" href={process.env.NEXT_PUBLIC_URL}>{settings.settings.name}</a>{' '}{new Date().getFullYear()}{'. '}{nl.AllRightsReserved}
        </p>
    );
};

export default Copyright;

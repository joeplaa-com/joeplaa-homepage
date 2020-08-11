import React from 'react';
import en from '../data/en.json';
import settings from '../data/settings.json';

const Copyright = () => {
    return (
        <p style={{ textAlign: "center" }}>
            {'© '}<a className="text-light" href={process.env.NEXT_PUBLIC_URL}>{settings.settings.name}</a>{' '}{new Date().getFullYear()}{'. '}{en.AllRightsReserved}
        </p>
    );
};

export default Copyright;

import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import React, { ReactElement } from 'react';

const LanguageSwitcher = (): ReactElement => {
    const { languages, originalPath, i18n } = useI18next();
    return (
        <ul className="languages">
            {languages.map((lng) => (
                <li key={lng}>
                    <Link to={originalPath} language={lng} style={{ textDecoration: i18n.resolvedLanguage === lng ? 'underline' : 'none' }}>
                        {lng}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default LanguageSwitcher;

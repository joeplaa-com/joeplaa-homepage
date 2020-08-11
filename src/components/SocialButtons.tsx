import React from 'react';
import { FaFacebook, FaGithub, FaGlobe, FaInstagram, FaLinkedin, FaMedium, FaPinterest, FaReddit, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { ISocialButton } from '../store/interfaces';

export const iconComponents = {
    facebook: FaFacebook,
    github: FaGithub,
    instagram: FaInstagram,
    linkedin: FaLinkedin,
    medium: FaMedium,
    pinterest: FaPinterest,
    reddit: FaReddit,
    twitter: FaTwitter,
    youtube: FaYoutube,
    website: FaGlobe,
    mail: MdMail
};

const SocialButtons = ({ buttons, className, size }: { buttons: Array<ISocialButton>, className: string, size: number }) => {
    function renderIcon(obj: ISocialButton) {
        const SpecificIcon = iconComponents[obj.name];
        return (<SpecificIcon />);
    };

    function renderIcons() {
        const renderedIcons: Array<React.ReactNode> = [];
        const classString = 'btn ' + `${className}`;
        buttons.map(button => {
            const buttonLink = button.link + button.value;
            renderedIcons.push(
                <a className={classString}
                    style={{ fontSize: size || 18 }}
                    href={buttonLink} target="_blank" rel="noopener noreferrer"
                    key={name}
                    id={name}
                >
                    {renderIcon(button)}
                </a>
            )
        })
        return renderedIcons;
    }

    return (
        <div>
            {renderIcons}
        </div>
    );
};

export default SocialButtons;

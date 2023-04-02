import React, { ReactElement } from 'react';
import Menu from './menu';
import { NavbarProps } from '../typescript';

export default function Header({ navbarLightText }: NavbarProps): ReactElement {
    console.log(navbarLightText);
    return (
        <header>
            <Menu navbarLightText={navbarLightText} />
        </header>
    );
}

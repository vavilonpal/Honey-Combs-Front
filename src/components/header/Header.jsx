import React from 'react';
import { ReactComponent as LogoIcon} from '../../images/logo-2.svg';
import {NavItem} from "./nav-item/NavItem";
import {NavMenu} from "./nav-menu/NavMenu";
import {TESTS} from "./constants";

const Header = () => {

    return (
        <header className="flex">
            <LogoIcon />
            <nav role="navigation" className={'flex space-x-6 ml-8 items-center'}>
                <NavItem text={'My Tests'}>
                    <NavMenu items={TESTS}/>
                </NavItem>

                <NavItem text={'Rating'}>
                    <NavMenu/>
                </NavItem>

                <NavItem text={'About Us'}/>
            </nav>
        </header>
    )
}

export default Header;

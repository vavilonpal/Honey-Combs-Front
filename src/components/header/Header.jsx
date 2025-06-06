import React from 'react';
import { ReactComponent as LogoIcon} from '../../images/logo-2.svg';
import {NavItem} from "./nav-item/NavItem";
import {NavMenu} from "./nav-menu/NavMenu";
import {TESTS} from "./constants";

const Header = ({isLoggedIn}) => {

    return (
        <header className="flex">
            <LogoIcon />
            <nav role="navigation" className={'flex flex-row space-x-6 ml-8 items-center'}>
                <NavItem text="Tests">
                    <NavMenu items={TESTS} />
                </NavItem>

                <NavItem text="Rating" to="/rating" />

                <NavItem text="About Us" to="/about" />

                {isLoggedIn
                    ? <NavItem text="Profile" to="/profile" />
                    : <NavItem text="Login" to="/login" />
                }


            </nav>
        </header>
    )
}

export default Header;

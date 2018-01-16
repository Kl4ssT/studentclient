import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Menu from '../../modules/Menu';

import '../../images/logo.png';

import './Header.scss';

class Header extends Component
{
    render()
    {
        return (
            <header className="header">
                <div className="container">
                    <div className="header__container">
                        <div className="logo">
                            <Link className="logo__link" to="/">
                                <img className="logo__image" src="/images/logo.png" alt="" width="30" />
                                Student Portal
                            </Link>
                        </div>
                        {/*<Menu />*/}
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
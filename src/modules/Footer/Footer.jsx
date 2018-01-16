import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../images/logo.png';

import './Footer.scss';

class Footer extends Component
{
    render()
    {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="footer__container">
                        <div className="logo">
                            <Link className="logo__link" to="/">
                                <img className="logo__image" src="/images/logo.png" alt="" width="30" />
                                Student Portal
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
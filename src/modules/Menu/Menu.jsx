import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.scss';

const Menu = (props) => {
    return (
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__item"><Link className="menu__link" to="/">Главная</Link></li>
                <li className="menu__item"><Link className="menu__link" to="/about">О нас</Link></li>
                <li className="menu__item"><Link className="menu__link" to="/contacts">Контакты</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
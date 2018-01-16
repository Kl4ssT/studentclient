import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.scss';

const Menu = (props) => {
    return (
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__item"><Link className="menu__link" to="/">Главная</Link></li>
                <li className="menu__item"><Link className="menu__link" to="/">Трансляции</Link></li>
                <li className="menu__item"><Link className="menu__link" to="/">Кафедры</Link></li>
                <li className="menu__item"><Link className="menu__link" to="/">О нас</Link></li>
                <li className="menu__item"><Link className="menu__link" to="/">Контакты</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
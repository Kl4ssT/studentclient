import React from 'react';
import { Link } from 'react-router-dom';

import './Department.scss';

const Department = (props) => {
    const { department } = props;

    return (
        <Link to={'department/' + department.id} className="department">
            <span className="department__image">
                <img src={window.ApiUrl + department.image} alt=""/>
                <span className="department__color" style={{backgroundColor: '#' + department.color}} />
            </span>
            <span className="department__title">{department.title}</span>
        </Link>
    );
};

export default Department;
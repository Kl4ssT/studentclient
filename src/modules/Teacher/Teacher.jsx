import React from 'react';
import { Link } from 'react-router-dom';

import './Teacher.scss';

const Teacher = (props) => {
    return (
        <Link to={'/teacher/' + props.id} className="teacher">
            <img src={"/" + props.photo} className="teacher__photo" alt="" />
            <span className="teacher__info">
                <span className="teacher__name">{props.name}</span>
            </span>
        </Link>
    );
};

export default Teacher;
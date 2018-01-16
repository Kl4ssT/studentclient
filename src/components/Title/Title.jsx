import React from 'react';

import './Title.scss';

const Title = (props) => {

    const className = props.dark ? 'title title--dark' : 'title';

    return (
        <div className={className}>
            <div className="title__icon">{props.icon}</div>
            <h2 className="title__text">{props.children}</h2>
        </div>
    );
};

export default Title;
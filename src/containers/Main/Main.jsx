import React, { Component } from 'react';

import CurrentStreams from '../../modules/CurrentStreams';
import Departments from '../../modules/Departments';

export default class Main extends Component
{
    render()
    {
        return (
            <div className="main-page">
                <CurrentStreams />
                <Departments />
            </div>
        );
    }
}
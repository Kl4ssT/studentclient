import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../../containers/Main';
import Department from '../../containers/Department';
import Teacher from '../../containers/Teacher';
import Video from '../../containers/Video';
import About from '../../containers/About';
import Contacts from "../../containers/Contacts";

const Routing = (props) => {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/department/:id" component={Department} />
            <Route path="/teacher/:id" component={Teacher} />
            <Route path="/video/:id" component={Video} />
            <Route path="/about" exact component={About} />
            <Route path="/contacts" exact component={Contacts} />
        </Switch>
    );
};

export default Routing;
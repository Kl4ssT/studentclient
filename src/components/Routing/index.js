import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../../containers/Main';
import Department from '../../containers/Department';
import Teacher from '../../containers/Teacher';
import Video from '../../containers/Video';

const Routing = (props) => {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/department/:id" component={Department} />
            <Route path="/teacher/:id" component={Teacher} />
            <Route path="/video/:id" component={Video} />
        </Switch>
    );
};

export default Routing;
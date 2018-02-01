import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App';

import './index.scss';

const renderApp = (Component) => {
    render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    )
};

renderApp(App);

if (module.hot)
    module.hot.accept(() => {
        const newApp = require('./containers/App').default;
        renderApp(newApp);
    });


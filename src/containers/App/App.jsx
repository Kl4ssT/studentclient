import React, { Component } from 'react';
import Header from '../../modules/Header';
import Footer from '../../modules/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from '../../components/Routing';
import { Provider } from 'react-redux';
import store from '../../store';

export default class App extends Component
{
    render()
    {
        return (
            <Provider store={store}>
                <Router>
                    <main className="main">
                        <Header />
                        <Routing />
                        <Footer />
                    </main>
                </Router>
            </Provider>
        );
    }
}
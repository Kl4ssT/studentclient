import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions';

import './Subscribe.scss';

class Subscribe extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            email: '',
            isSubscribed: false
        };

        this.formHandler = this.formHandler.bind(this);
    }

    formHandler()
    {
        const { teacherId } = this.props;
        const { email } = this.state;
        this.setState({ email: '', isSubscribed: true });
        this.props.addSubscriber({ teacherId, email });
    }

    render()
    {

        const button =
            (!this.state.isSubscribed) ?
                <button className="subscribe__button" onClick={this.formHandler}>Подписаться</button>
            :
                <button className="subscribe__button" disabled>Подписан</button>;

        return (
            <div className="subscribe">
                <input type="text" className="subscribe__input" value={this.state.email} placeholder="Введите email" onChange={(e) => this.setState({ email: e.target.value })} />
                {button}
            </div>
        );
    }
}

export const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export const mapStateToProps = state => {
    return {
        teacher: state.teacher
    }
};

export default Subscribe;
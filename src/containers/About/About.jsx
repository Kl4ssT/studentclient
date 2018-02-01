import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import * as Actions from "../../actions";
import Title from "../../components/Title";

import '../../modules/Page/Page.scss';

class About extends Component {
    componentDidMount()
    {
        this.props.getAboutPage();
    }

    render()
    {
        const { page } = this.props;

        return (
            <section className="page">
                <div className="container">
                    <Title dark={true} icon={<img src="/icon-departments.png" alt="" />}>{page.title}</Title>
                    <div className="page__container" dangerouslySetInnerHTML={{__html: page.content}} />
                </div>
            </section>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        page: state.page
    };
};


export const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default About;
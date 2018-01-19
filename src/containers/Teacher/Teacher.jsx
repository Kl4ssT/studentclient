import React, { Component } from 'react';
import * as Actions from "../../actions";
import { bindActionCreators } from "redux";
import Title from "../../components/Title";
import Videos from '../../modules/Videos';

import './Teacher.scss';

import '../../images/icon-stream.png';

class Teacher extends Component
{
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        document.querySelector('body').scrollTop = 0;
        this.props.getTeacher(this.props.match.params.id);
    }

    render()
    {
        const { teacher } = this.props;

        const videos = (teacher.videos.length > 0) ? <Videos videos={teacher.videos} /> : null;

        return (
            <section className="teacher-page">
                <div className="container">
                    <Title icon={<img src="/images/icon-departments.png" alt=""/>} dark={true}>{teacher.info.name}</Title>
                    <div className="teacher-page__container">
                        <div className="teacher-page__info">
                            <div className="teacher-page__photo"><img src={window.ApiUrl + teacher.info.photo} alt=""/></div>
                            <div className="teacher-page__description">{teacher.info.description}</div>
                        </div>
                        <section className="teacher-page__stream">
                            <Title icon={<img src="/images/icon-stream.png" alt=""/>} dark={true}>Текущая трансляция</Title>
                            <div className="stream">
                                <iframe allowFullScreen={true} frameBorder="0" src={'//www.youtube.com/embed/live_stream?channel=' + teacher.info.channel_id + '&autoplay=1'} />
                            </div>
                        </section>
                        <section className="teacher-page__videos">
                            <Title icon={<img src="/images/icon-streams.png" alt=""/>} dark={true}>Предыдущие трансляции</Title>
                            { videos }
                        </section>
                    </div>
                </div>
            </section>
        );
    }
}

export const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export const mapStateToProps = state => {
    return {
        teacher: state.teacher
    }
};

export default Teacher;
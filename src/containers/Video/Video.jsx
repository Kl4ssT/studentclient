import React, { Component } from 'react';
import * as Actions from "../../actions";
import { bindActionCreators } from "redux";
import Title from "../../components/Title";

import './Video.scss';

import '../../images/icon-stream.png';

class Video extends Component
{
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        this.props.getVideo(this.props.match.params.id);
    }

    render()
    {
        const { video } = this.props;

        return (
            <section className="video-page">
                <div className="container">
                    <Title icon={<img src="/images/icon-streams.png" alt=""/>} dark={true}>{video.title}</Title>
                    <div className="video-page__container">
                        <iframe allowFullScreen={true} frameBorder="0" src={'//www.youtube.com/embed/' + video.id} />
                    </div>
                </div>
            </section>
        );
    }
}

export const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export const mapStateToProps = state => {
    return {
        video: state.video
    }
};

export default Video;
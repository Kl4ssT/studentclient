import React, { Component } from 'react';
import Title from '../../components/Title';
import { Link } from 'react-router-dom';

import './CurrentStreams.scss';

import '../../images/icon-streams.png';
import '../../images/current-stream-bg.jpg';
import { bindActionCreators } from "redux";
import * as Actions from "../../actions";

const MainStream = (props) => {
    const { stream } = props;

    if (stream !== null)
        return (
            <div className="current-streams__main">
                <iframe allowFullScreen={true} frameBorder="0" src={'//www.youtube.com/embed/live_stream?channel=' + stream.id + '&autoplay=1'} />
            </div>
        );
    else
        return null;
};

const OtherStreams = (props) => {
    const { streams } = props;

    if (streams.length > 0)
        return (
            <div className="current-streams__other">
                { streams.map((item, index) => {
                    return (
                        <Link key={index} to={'/video/' + item.videoId} className="current-streams__other-link">
                            <img src={"/" + item.thumbnail} alt="" />
                        </Link>
                    );
                }) }

            </div>
        );
    else
        return null;
};

class CurrentStreams extends Component
{
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        this.props.getStreams();
    }

    render()
    {

        const { streams } = this.props;

        let mainStream = null;
        let otherStreams = [];

        if (streams.length > 0) {
            mainStream = streams[0];

            otherStreams = streams.slice(1, streams.length);
        }

        return (
            <section className="current-streams">
                <div className="container">
                    <Title icon={<img src="/icon-streams.png" alt="" />}>Текущие трансляции</Title>
                    {streams.length === 0 ? <Preloader /> : null}
                    <MainStream stream={mainStream} />
                    <OtherStreams streams={otherStreams} />
                </div>
            </section>
        );
    }
}

const Preloader = (props) => {
    return (
        <div className="preloader">
            Загрузка...
        </div>
    );
};

export const mapStateToProps = (state) => {
    return {
        streams: state.streams
    };
};

export const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default CurrentStreams;
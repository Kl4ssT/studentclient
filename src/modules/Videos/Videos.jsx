import React, { Component } from 'react';
import Slider from 'nuka-carousel';
import { Link } from 'react-router-dom';
import PrevIcon from 'react-icons/lib/md/chevron-left';
import NextIcon from 'react-icons/lib/md/chevron-right';

import './Videos.scss';

const Videos = (props) => {
    const { videos } = props;

    console.log(videos);

    if (videos.length === 0)
        return null;

    return (
        <Slider className="videos" {...sliderSettings}>
            {videos.map((item, index) => {
                return (
                    <Link to={'/video/' + item.id} key={index} className="videos__item video">
                        <span className="video__thumbnail"><img src={item.thumbnail} alt=""/></span>
                        <span className="video__title">{item.title}</span>
                    </Link>
                );
            })}
        </Slider>
    );
};

class PrevButton extends Component
{
    render()
    {
        const classname = (this.props.currentSlide === 0) ? 'hidden ' : '';

        return (
            <button className={classname + 'decorator'} onClick={this.props.previousSlide}><PrevIcon /></button>
        );
    }
}

class NextButton extends Component
{
    render()
    {
        const classname = ((this.props.currentSlide + this.props.slidesToShow === this.props.slideCount) || (this.props.slideCount <= this.props.slidesToShow)) ? 'hidden ' : '';

        return (
            <button className={classname + 'decorator'} onClick={this.props.nextSlide}><NextIcon /></button>
        );
    }
}

const sliderSettings = {
    cellSpacing: 20,
    framePadding: '50px',
    easing: 'linear',
    slidesToShow: 3,
    slideWidth: '320px',
    initialSlideHeight: 180,
    decorators: [
        {
            component: PrevButton,
            position: 'CenterLeft'
        },
        {
            component: NextButton,
            position: 'CenterRight'
        }
    ]
};

export default Videos;
import React, {Component} from 'react';
import Title from "../../components/Title";

class Page extends Component {
    render()
    {
        const { page } = this.props;

        return (
            <div className="page">
                <Title dark={true} icon={<img src="images/icon-departments.png" alt="" />}>{page.title}</Title>
                <div className="page__container">{page.content}</div>
            </div>
        );
    }
}


export default Page;
import React, { Component } from 'react';
import * as Actions from "../../actions";
import { bindActionCreators } from "redux";
import Title from "../../components/Title";
import Teacher from '../../modules/Teacher';

import './Department.scss';
import '../../images/icon-departments.png';

class Department extends Component
{
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        this.props.getDepartment(this.props.match.params.id);
    }

    render()
    {
        const { department } = this.props;

        if (!department)
            return null;

        return (
            <section className="department-page">
                <div className="container">
                    <Title icon={<img src="/images/icon-departments.png" alt="" />} dark={true}>{department.title}</Title>
                    <div className="department-page__teachers">
                        {department.Teachers.map((item, index) => <Teacher {...item} key={index} />)}
                    </div>
                </div>
            </section>
        );
    }
}

export const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export const mapStateToProps = state => {
    return {
        department: state.department
    }
};

export default Department;
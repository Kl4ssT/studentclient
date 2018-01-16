import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import Title from '../../components/Title';
import Department from './Department';

import './Departments.scss';

import '../../images/icon-departments.png';
import * as departmentsActions from '../../actions/index';

class Departments extends Component
{
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        this.props.getDepartments();
    }

    render()
    {
        const { departments } = this.props;
        return (
            <section className="departments">
                <div className="container">
                    <Title dark={true} icon={<img src="images/icon-departments.png" alt="" />}>Кафедры</Title>
                    <div className="departments__container">
                        {departments.map((item, index) => <Department department={item} key={index} />)}
                    </div>
                </div>
            </section>
        );
    }
}

export const mapDispatchToProps = dispatch => bindActionCreators(departmentsActions, dispatch);

export const mapStateToProps = state => {
    return {
        departments: state.departments
    }
};

export default Departments;
import React from 'react';
import Signup from './components';
import GradeAssign from './components/Faculty';
import AssignmentCard from './components/Student';

import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
 
import {mount} from 'enzyme';

it('Passed',()=>{
    const component=mount(<Signup></Signup> );
    expect(component).toMatchSnapshot();
    component.setState({name: 'Nehal'});
    expect(component).toMatchSnapshot();
    component.unmount();
});

it('Passed',()=>{
    const component=mount(<GradeAssign></GradeAssign> );
    expect(component).toMatchSnapshot();
    component.setState({grade: 77});
    expect(component).toMatchSnapshot();
    component.unmount();
});

it('Passed',()=>{
    const component=mount(<AssignmentCard name="NodeJS" email="nehal@sjsu.edu" courseid="CMPE273"></AssignmentCard> );
    expect(component).toMatchSnapshot();
    component.setState({link: ''});
    expect(component).toMatchSnapshot();
    component.unmount();
});


import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = ({ courses }) => {
    const getCourses = () => courses.map(course => {
        return (
            <React.Fragment key={course.id}>
                <Header
                    course={course.name}
                />
                <Content
                    parts={course.parts}
                />
                <Total
                    exercises={course.parts}
                />
            </React.Fragment>
        );
    })
    return (
        <>
            {getCourses()}
        </>
    );

}

export default Course;
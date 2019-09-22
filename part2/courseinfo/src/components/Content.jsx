import React from 'react';
import Part from './Part';

const Content = ({ parts }) => {
    const getParts = () => parts.map(part => {
        return (
            <Part
                key={part.id}
                name={part.name}
                exercise={part.exercises}
            />
        );
    });

    return (
        <>
            {getParts()}
        </>
    );
}

export default Content;
import React from 'react'

const Total = ({ exercises }) => {
    const getTotalExerciseCount = () => exercises.reduce((excerciseA, excerciseB) => {
        return excerciseA + excerciseB.exercises
    }, 0);
    return (
        <span><b>Number of exercises {getTotalExerciseCount()}</b></span>
    );
}

export default Total;
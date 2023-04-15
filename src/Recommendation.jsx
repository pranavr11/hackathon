import './Recommendation.css'
import React from 'react'
import reactLogo from './assets/workout.png'

export default function Recommendation(){
    return(
        <div className="recommendation-box">
            <img src={reactLogo} alt="Recommended Exercise" className="workoutLogo" />
            <div className="exercise">
                <h2 className="titlecard">Today's Recommended Exercise:</h2>
                <h3 className="exercise-name">Weightlifting</h3>
                <p className="exercise-description">Kettlebell squats are a weightlifting exercise that target the muscles of the lower body, including the quadriceps, hamstrings, and glutes.</p>
            </div>
        </div>
    )
}

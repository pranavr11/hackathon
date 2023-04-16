import './Food.css'
import React from 'react'

export default function Food(props){
    return(
        <div className="recommendation-box">
            <div className="exercise">
                <h3 className="exercise-name">{props.name}</h3>
            </div>
        </div>
    )
}

import React from 'react'
import './buildcontrol.css'

const BuildControl = (props) => (
    <div className="build-control">
        <div>{props.label}</div>
        <div>
            <button className="button-less" onClick={props.removed}>Less</button>
            <button className="button-more" onClick={props.added}>More</button>
        </div>
    </div>
)

export default BuildControl;
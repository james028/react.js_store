import React from 'react'
import './buildcontrol.css'

const BuildControl = (props) => (
    <div className="build-control">
        <div>{props.label}</div>
        <button>Less</button>
        <button>More</button>
    </div>
)

export default BuildControl;
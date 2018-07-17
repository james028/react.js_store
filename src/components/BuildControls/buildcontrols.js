import React, { Component } from 'react'
import BuildControl from '../BuildControl/buildcontrol'
import './buildcontrols.css'

const controls = [
    {label: "salad", type: "salad"},
    {label: "bacon", type: "bacon"},
    {label: "cheese", type: "cheese"},
    {label: "meat", type: "meat"},
];

class BuildControls extends Component {
  render() {
    return (
      <div className="build-controls">
        {controls.map(ct => (
            <BuildControl 
            key={ct.label} 
            label={ct.label} 
            
            />
        ))}
      </div>
    );
  }
}

export default BuildControls;

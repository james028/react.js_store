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
      <h2 style={{textAlign: 'center'}}>Add more products</h2>
        {controls.map(ct => (
            <BuildControl 
            key={ct.label} 
            label={ct.label} 
            added={() => this.props.addControlMore(ct.type)}
            removed={() => this.props.addControlLess(ct.type)}
            totalPr={this.props.total}
            />
        ))}
        <div>Total price: {this.props.total}</div>
        <button onClick={this.props.modalOrder}>ORDER NOW</button>
      </div>
    );
  }
}

export default BuildControls;

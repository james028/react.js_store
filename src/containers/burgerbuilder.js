import React, { Component } from 'react'
import Burger from '../components/Burger/burger'
import BuildControls from '../components/BuildControls/buildcontrols'

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1
    },
  };
  render() {
    return (
      <div>
        Burger builder
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls />
      </div>
    )
  }
}

export default BurgerBuilder;

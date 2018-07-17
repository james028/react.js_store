import React, { Component } from 'react'
import Burger from '../components/Burger/burger'

class BurgerBuilder extends Component {
  render() {
    return (
      <div>
        Burger builder
        <Burger />
      </div>
    )
  }
}

export default BurgerBuilder;

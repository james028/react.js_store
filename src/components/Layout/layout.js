import React, { Component } from 'react'
import BurgerBuilder from '../../containers/burgerbuilder'

class Layout extends Component {
  render() {
    return (
      <div>
        <div>toolbar, menu, itp</div>
        <BurgerBuilder />
      </div>
    )
  }
}

export default Layout;

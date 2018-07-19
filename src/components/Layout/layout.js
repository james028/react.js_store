import React, { Component } from 'react'
import BurgerBuilder from '../../containers/burgerbuilder'
import Navbar from '../Navbar/navbar'

class Layout extends Component {

  state = {
    isShow: false
  };

  isShowMenu = () => {
    this.setState({
      isShow: true
    })
  }

  isCloseMenu = () => {
    this.setState({
      isShow: false
    })
  }


  render() {
    return (
      <div>
        <Navbar 
        close={this.isCloseMenu}
        drawerleft={this.state.isShow}
        show={this.isShowMenu}/>
        <div style={{marginTop: '70px'}}>
          <h1>Make your burger</h1>
          <BurgerBuilder />
        </div>
      </div>
    )
  }
}

export default Layout;

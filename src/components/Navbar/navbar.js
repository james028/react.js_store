import React, { Component } from 'react'
import './navbar.css'
import NavbarLeft from './navbarleft'
import BackdropLeft from './backdropleft'

class Navbar extends Component {

  render() {

    let navbarleft;
    let backdropleft;
    if (this.props.drawerleft) {
        navbarleft = <NavbarLeft closeLeft={this.props.close}/>;
        backdropleft = <BackdropLeft 
        showLeft={this.props.show}
        closeLeft={this.props.close}/>
    }

    return (
      <div>
        {navbarleft}
        {backdropleft}
        <div className="navbar">
          <div onClick={this.props.show}>LOGO</div>
          <nav>
              <ul>
                  <li><a href="/"></a>Homepage</li>
                  <li><a href="/"></a>Orders</li>
              </ul>
          </nav>
        </div>
      </div>
    )
  }
}
export default Navbar;

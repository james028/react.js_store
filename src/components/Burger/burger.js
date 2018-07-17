import React, { Component } from 'react'
import BurgerIng from '../BurgerIng/burgering'
import './burger.css'

class Burger extends Component {
  render() {
    //let transformFood = "aa";
    return (
        <div className="burger">
            <BurgerIng type="bread-top"/>
                
            <BurgerIng type="bread-bottom"/>
         </div>
    )
  }
}

export default Burger;





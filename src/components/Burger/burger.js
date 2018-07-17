import React, { Component } from 'react'
import BurgerIng from '../BurgerIng/burgering'
import './burger.css'

class Burger extends Component {
  render() {
      let transformParts = Object.keys(this.props.ingredients)
        .map((id) => {
          return [...Array(this.props.ingredients[id])].map(( _, i) => {
            return <BurgerIng key={id + i} type={id} />
          });
        })
        .reduce((el, i) => {
          return el.concat(i);
        }, []);
        
    return (
        <div className="burger">
            <BurgerIng type="bread-top"/>
                {transformParts}
            <BurgerIng type="bread-bottom"/>
         </div>
    )
  }
}

export default Burger;





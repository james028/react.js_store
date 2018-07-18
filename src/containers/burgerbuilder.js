import React, { Component } from 'react'
import Burger from '../components/Burger/burger'
import BuildControls from '../components/BuildControls/buildcontrols'
import Modal from '../components/Modal/modal'
import Backdrop from '../components/Modal/backdrop'

const INGREDIENT_PRICES = {
  salad: 0.2,
  bacon: 0.3,
  cheese: 0.2,
  meat: 0.3
};


class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1
    },
    totalPrice: 2.2,
    purchasing: false
  };



  addHandlerMore = (e) => {
      const oldCount = this.state.ingredients[e];
      const updateCount = oldCount + 1;
      const updatedIncredients = {
        ...this.state.ingredients
      };
      updatedIncredients[e] = updateCount;
      const priceAddition = INGREDIENT_PRICES[e];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice + priceAddition;
      this.setState({
        totalPrice: newPrice,
        ingredients: updatedIncredients
      })
        //this.updatePurchaseState(updatedIncredients);
    }

    addHandlerLess = (e) => {
      const oldCount = this.state.ingredients[e];
      const updateCount = oldCount - 1;
      const updatedIncredients = {
        ...this.state.ingredients
      };
      updatedIncredients[e] = updateCount;
      const priceAddition = INGREDIENT_PRICES[e];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice + priceAddition;
      this.setState({
        totalPrice: newPrice,
        ingredients: updatedIncredients
      })
    }

    showModal = () => {
      this.setState({
        purchasing: true
      })
    }

    closeModal = () => {
      this.setState({
        purchasing: false
      })
    }


  render() {
    return (
      <div>
        <Modal 
        close={this.closeModal}
        show={this.state.purchasing}/>
        <div style={container}>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls 
          modalOrder={this.showModal}
          addControlMore={this.addHandlerMore}
          addControlLess={this.addHandlerLess}
          total={this.state.totalPrice.toFixed(2)}
          />
        </div>
        
      </div>
    )
  }
}

const container = {
  height: '100vh',
  backgroundColor: '#fff',
  width: '70%',
  marginLeft: '15%'
};

export default BurgerBuilder;

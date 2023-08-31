import React, { Component } from 'react';
import Auxilary from '../../../hoc/Auxilary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients).map((igKey) => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
          {this.props.ingredients[igKey]}
        </li>
      );
    });

    return (
      <Auxilary>
        <h3>Your Order</h3>
        <p>A Delicous Burger with following Ingredients: </p>
        <ul>{ingredientsSummary}</ul>
        <p><strong>Total Price: {this.props.totalPrice.toFixed(2)}</strong></p>
        <p>Click to Continue</p>
        <Button btnType='Danger' clicked={this.props.cancelPurchase}>
          Cancel
        </Button>
        <Button btnType='Success' clicked={this.props.continuePurchase}>
          Continue
        </Button>
      </Auxilary>
    );
  }
}

export default OrderSummary;

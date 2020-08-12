import React from 'react';
import cart from '../../assets/cart.svg';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Store</h1>
        <img src={cart} alt="cart-icon" className="cart-icon" />
      </div>
    );
  }
}

export default Header;

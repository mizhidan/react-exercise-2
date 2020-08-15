import React from 'react';
import cart from '../../assets/cart.svg';
import './Header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="header">
        <h1>Store</h1>
        <div className="cart">
          <img src={cart} alt="cart-icon" className="cart-icon" />
          <span className="count">{this.props.count}</span>
        </div>
      </div>
    );
  }
}

export default Header;

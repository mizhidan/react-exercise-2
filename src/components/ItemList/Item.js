import React from 'react';
import productImg from '../../assets/product_image_placeholder.png';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
    }
  }

  render() {
    return (
      <div className="Item">
        <h3>{this.props.name}</h3>
        <img src={productImg} alt="productImg" />
        <div className="price">
          <span>{this.props.price}</span>
          <button className="add-to-cart-btn">add to cart</button>
        </div>
      </div>
    );
  }
}

export default Item;

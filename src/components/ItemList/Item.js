import React from 'react';
import productImg from '../../assets/product_image_placeholder.png';
import "./Item.css";
import { Button } from 'antd';
import 'antd/dist/antd.css';

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
      <div className="item">
        <h3>{this.props.name}</h3>
        <img src={productImg} alt="productImg" />
        <div className="price-add">
          <span className="price">{this.props.price}</span>
          <Button type="primary" size={"small"} className="button" onClick={this.props.addCount}>add to cart</Button>
        </div>
      </div>
    );
  }
}

export default Item;

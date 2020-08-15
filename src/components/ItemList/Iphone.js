import React from 'react';
import Item from "./Item";

class Iphone extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
    }
  }

  render() {
    return (
      this.props.data.map((item,index) => {
        if(item.category === "iPhone")
        return <Item
            name={item.name}
            price={item.price}
            key={index}/>
      })
    )
  }
}

export default Iphone;
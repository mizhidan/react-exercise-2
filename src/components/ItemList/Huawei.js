import React from 'react';
import Item from "./Item";

class Huawei extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      data: []
    }
  }

  render() {
    return (
      this.props.data.map((item,index) => {
        if(item.category === "HUAWEI")
          return <Item
            name={item.name}
            price={item.price}
            addCount={this.props.addCount}
            key={index}/>
      })
    )
  }
}

export default Huawei;
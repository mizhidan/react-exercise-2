import React from 'react';
import Item from './Item';
import Iphone from './Iphone';
import Huawei from "./Huawei";

const url="http://localhost:3000/products"

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch(url).then(result => {
      return result.json();
    }).catch(error => {
      console.log(error);
      }).then(json => {
        this.setState({items: json})
    })
  }

  render() {
    return (
      <div>
        <h2>iPhone</h2>
        <div>
          <Iphone data={this.state.items} />
        </div>
        <h2>HUAWEI</h2>
        <div>
          <Huawei data={this.state.items} />
        </div>
      </div>



    )
  }
}

export default Items;

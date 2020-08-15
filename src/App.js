import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Items from './components/ItemList/Items';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      count: 0
    }
  }

  addCount() {
    this.setState({
      count: this.state.count+1
    })
  }

  render() {
    return (
      <main className="app">
        <Header count={this.state.count}/>
        <Items addCount={this.addCount.bind(this)}/>
      </main>
    );
  }
}

export default App;

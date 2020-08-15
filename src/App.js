import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Items from './components/ItemList/Items';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <Items />
      </main>
    );
  }
}

export default App;

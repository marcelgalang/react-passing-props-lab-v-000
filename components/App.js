const React = require('react');
const { Component } = require('react');

const FruitBasket = require('./FruitBasket');

class App extends Component {
  constructor(){
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null,
    };
  }

  render(){
    return(
      <FruitBasket />
    );
  }


}


module.exports = App;

import React, { Component } from 'react';
import JSONData from './data/sentences.json';
import './App.css';


//higher order function
function searchingFor(keyword) {
  return function(x) {
    return x.data.toLowerCase().includes(keyword.toLowerCase()) || !keyword;
  };
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      JSONData: JSONData,
      keyword: ''
    };
    this.searchHandler = this.searchHandler.bind(this);
  }


  searchHandler(event) {
    this.setState({ keyword: event.target.value });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src="https://www.snorkel.org/doks-theme/assets/images/layout/Snorkel.png"></img>
          <div className="Boxy">
            <h1>Snorkel Keyword Search</h1>
            <input type="text" defaultValue={this.state.keyword} onChange={this.searchHandler} />
          </div>
          {this.state.JSONData.filter(searchingFor(this.state.keyword)).map(sentence => (
            
            <div className="Special">
            <div key={sentence.id}>
              <p>{sentence.data}</p>
              </div>
            </div>
          ))}
        </header>
      </div>
    );
  }
}

export default App;

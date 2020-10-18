import React, {Component} from 'react';
import {CardList} from './components/cardList/card-list.component.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      search: "Captain America",
    };
  }

  componentDidMount() {
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${this.state.search}&apikey=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(characters => this.setState({characters: characters.data.results}))
      .then(() => console.log(this.state))
  }

  componentDidUpdate(pP, prevState){

    if (this.state.search !== prevState.search) {
      fetch(
        `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${this.state.search}&apikey=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .then(characters => this.setState({characters: characters.data.results}))
        .then(() => console.log(this.state))
    }
  }

  handleChange = (e) => {
    (e.target.value === "") ? 
      this.setState({search: "Captain America"}) 
      : this.setState({search: e.target.value});
  }

  render(){
    const {characters} = this.state;
    return ( 
      <div className="App">   
        <img src="https://i.pinimg.com/564x/e4/2b/72/e42b72121ac11b1997e99977b21daf2a.jpg" width="120" height="50" alt="marvel" />
        
        <input 
          className="search" 
          type="search" 
          placeholder={"Marvel character"}
          onChange={this.handleChange}
        />
        
        <CardList characters={characters} />
      </div>
    );
  }
}

export default App;

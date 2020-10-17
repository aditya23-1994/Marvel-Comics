import React, {Component} from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Aditya',
      characters: [],
    };
  }


  componentDidMount() {
    fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=v&apikey=${process.env.REACT_APP_API_KEY}`)
    .then(response => response.json())
    .then(characters => this.setState({characters: characters.data.results}))
    .then(() => console.log(this.state))
  }

  render(){
    const {characters} = this.state;
    return ( 
      <div className="App">   
        <img src="https://i.pinimg.com/564x/e4/2b/72/e42b72121ac11b1997e99977b21daf2a.jpg" width="120" height="50" />
        <div className="Card-list">
        {characters.map(
          character => (
            <div key = {character.id}>
              <img src={`${character.thumbnail.path}/portrait_fantastic.jpg`}/> 
              <h2>{character.name}</h2>
            </div>
          )
        )}
        </div>
      </div>
    );
  }
}

export default App;

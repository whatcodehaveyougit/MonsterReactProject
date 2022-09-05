import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

class App extends Component {

  constructor() {
    console.log('Constructor');
    super()
    this.state = {
      name: { 
        first: "Sigurd", 
        last: "Watt"
      },
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount() {
    console.log('component did mount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => response.json() )
      .then( users => 
          this.setState( () => {
            return { monsters: users, filteredMonsters: users }
            }, 
            () => {
              console.log( this.state.monsters );
            }
          ) 
      )
  }

  // Functions in the class only get built once
  onSearchEvent = (event) => {
    this.setState(() => {
      return { searchField: event.target.value.toLocaleLowerCase() }
    })
  }

  // Every time react wants to update the DOM it runs the render method
  render() {
    console.log('render');

      // Destructuring - casting them into variables (makes it more readable)
      const { monsters, searchField } = this.state;
      const { onSearchEvent } = this;

      const filteredMonsters =monsters.filter( monstor => {
        return monstor.name.toLocaleLowerCase().includes( searchField )
      })

    return (
      <div className="App">
        <header className="App-header">
          <SearchBox  onChangeHandler={onSearchEvent} placeholder="Search Monsters" className="search-monsters" />  
          <p>My name is: { this.state.name.first } { this.state.name.last }</p>

          <CardList filteredMonsters={filteredMonsters} />

          {/* <button onClick={() => { this.setState({ name: "Jim" }) } } >Change Name</button> */}
          {/* This line creates a new object in the state so that the DOM re-renders and updates */}

          <button onClick={() => { 
            this.setState( () => {
              return {
                name:{ first: "Dig", last: "Busby" }
              }
            }, () => {
              console.log( this.state.name );
            }) 
          }
          } >Change Name</button>
        </header>
      </div>
    );
  }
  
}

export default App;

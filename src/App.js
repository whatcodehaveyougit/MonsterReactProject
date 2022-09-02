import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {


  constructor() {
    console.log('Constructor');
    super()
    this.state = {
      name: { first: "Sigurd", last: "Watt" }
    }


  }

  render() {
    console.log('render');
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>My name is: { this.state.name.first } { this.state.name.last }</p>

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

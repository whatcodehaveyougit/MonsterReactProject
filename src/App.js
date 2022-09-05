import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

const App = () => {

  const [ name, setName ] = useState('Sigurd Watt')
  const [ searchField, setSearchField ] = useState('')
  const [ monsters, setMonsters ] = useState([])


  useEffect(() => {
    // Putting this inside a useEffect means we don't get an infinite loop
    // It only runs on page mount as there is not 2nd argument telling it to render when a var changes
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => response.json() )
      .then( users => setMonsters(users) )
  }, [])


  const filteredMonsters = monsters.filter( monstor => {
    return monstor.name.toLocaleLowerCase().includes( searchField )
  })

  // Functions in the class only get built once
  const onSearchEvent = (event) => {
    console.log('search field running');
    setSearchField( event.target.value.toLocaleLowerCase() )
  }

  return (
          <div className="App">
              <SearchBox  onChangeHandler={onSearchEvent} placeholder="Search Monsters" className="search-monsters" />  
    
              <CardList filteredMonsters={filteredMonsters} />
    
              <p>My name is: { name }</p>
              <button onClick={() => { setName( "Dom Busby" ) } } >Change Name to Dom</button> 
  
          </div>
        );
}

export default App;

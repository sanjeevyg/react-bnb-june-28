import './App.css';
import { useState, useEffect } from 'react'
import CardContainer from './Components/CardContainer'
import { Outlet } from 'react-router-dom'
import NavBar from './Components/NavBar';

function App() {
  const [characters, setCharacter] = useState([])
  const [name, setName] = useState('')

  const deleteCharacter = (characterD) => {
    const newCharacters = characters.filter(character => character !== characterD)
    setCharacter(newCharacters)
  }

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(({results}) => setCharacter(results))
  }, [])

  const filter = (event) => {
    const {value} = event.target
    setName(value)
  }
  
  const filteredCharacters = () => {
      return characters.filter(character => {
        return character.name.toLowerCase()
        .includes(name)
      })
  }
  
  return (
    <div className="App">
      <NavBar name={name} filter={filter}/>
      <Outlet />
      <CardContainer key="characters" characters={filteredCharacters()} deleteCharacter={deleteCharacter}/>
    </div>
  );
}

export default App;

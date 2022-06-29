import React from 'react'

export default function Card({character, deleteCharacter}) {
    const handleDelete = (event) => {
        event.preventDefault()
        deleteCharacter(character)
    }

  return (
    <div className='card'>
        <img src={character.image} alt="character" width="200px"/>
        <div>{character.name}</div>
        <div>{character.species}</div>
        <div>{character.status}</div>
        <button>Toggle</button>
        <button onClick={handleDelete}>Delete</button>
    </div>     
  )
}
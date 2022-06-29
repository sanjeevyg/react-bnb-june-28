import React from 'react'
import Card from './Card'

export default function CardComponent({characters, deleteCharacter}) {


  const characterList = () => characters.map((character) => {
    return (
      <Card key={character.id} character={character} deleteCharacter={deleteCharacter}/>
    )
  })
 
  return (
    <div className='card-container'>{characterList()}</div>
  )
}

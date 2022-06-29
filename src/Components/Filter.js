import React from 'react'

export default function Filter({filter, name}) {
  return (
    <div className='form'>
        <form>
            <label htmlFor='text' id='sort'>Sort</label>
            <input 
                name='name'
                type='text'
                id='filter-input'
                value={name} 
                placeholder='Movie Name'
                onChange={filter}
            />
        </form>
    </div>
  )
}

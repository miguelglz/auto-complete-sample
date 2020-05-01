import React from 'react'
import AutoComplete from './components/AutoComplete'
import StyledLink from './components/StyledLink'
import './App.css'

function App () {
  return (
    <div className='App'>
      <div className='container'>
        <p>
          Auto-complete using data from <StyledLink to='http://www.dnd5eapi.co/'>The D&D 5e API</StyledLink>
        </p>
        <AutoComplete
          resourceEndpoint='spells'
          label='Type in the name of a spell to search for —'
          placeholder='Ex. Protection from Poison'
        />
      </div>
    </div>
  )
}

export default App

import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { onGetCharacters} from '../redux/actions/charactersActions'

function CharacterList({onGetCharacters, characters}) {

  useEffect(() => {
    onGetCharacters()
  },[onGetCharacters])

  return (
    <div>
      <ul>
        <li>Xavierón</li>
        {
          characters.map((c, i) => <li key={i}>{c.name}</li>)
        }
      </ul>
    </div>
  )
}

function mapStateToProps(state){
  return {
    characters: Object.values(state.characters.chars)
  }
}

let mapDispatchToProps = {
  onGetCharacters
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)

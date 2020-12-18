import React, { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Card from './component/Card'
import Form from './component/Form'
// import Form from './component/Form'
// import List from './component/List'


const  App = () =>{
  const [pokemon, setPokemon] = useState([])

  // useEffect(() => {
  //   axios.get('http://localhost:3030/api/cards').then(res => {
  //     setPokemon(res.data.cards)

  //   })
  // },[])
 
    return (
      <div className="App" >
        <Form  setPokemon={setPokemon}/>
        <Card  pokemonData={pokemon} />
           
      </div>
    )
   
}

export default App

import React, { useState,useEffect } from 'react'
import './App.css'
import Form from './component/Form'
import List from './component/List'
import ListCard from './component/ListCard'


const  App = () =>{
  
  const [inputText , setInputText] = useState("");
  const [ListText ,SetList] = useState([]);
  const [data,setData] = useState([]);
  
  const getData =() => {
    fetch('http://localhost:3030/api/cards?limit=30',{
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      }
    }).then(response => {console.log(response); return response.json();}).then(myJson => { setData(myJson); console.log(myJson)}) 
  }

  useEffect(() => {getData()},[]  )
    return (
      <div className="App" >
        <h1>hello</h1>
        <Form 
            ListProp={ListText} 
            setList={SetList} 
            inputText={inputText} 
            setInputText={setInputText}
        />
        <List 
            ListProp={ListText}
            SetList={SetList} 
        />
       <ListCard  cards={setData.cards} />
      </div>
    )
}

export default App

import React, {useState,useEffect } from 'react';


function  SearchCard() {

    const [data,setData]=useState([]);
    const getData = () => {
        fetch(
        'http://localhost:3030/api/cards',
        {
            header: { 'Content-Type' : 'application/json',  'Accept' : 'application/json' }
        }).then(function(response){
            console.log(response)
            return response.json();
        }).then(function(myJson){
            console.log(myJson)
            setData(myJson)
        })}
        useEffect(() => {getData()},[])


     
        return (
            <div>
                {
                    data.cards && data.cards.length>0 && data.cards.map((cards)=>( <img src={cards.imageUrl} alt="" />)) 
                }
            </div>
        );
    
}

export default SearchCard;
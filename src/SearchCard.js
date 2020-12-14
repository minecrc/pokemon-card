import React, {useState,useEffect } from 'react';

const SearchCard = () =>{

    const [data,setData]=useState([]);
   
    const inputTextHandler = (e) => {
        console.log(e.target.value);
      
    }
    const getData = () => {
        let limit = 30;
        //let type = 'normal';

       /* +'&type='+type */
        fetch(
        'http://localhost:3030/api/cards?limit='+limit,
        {
            header: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json' 
            }
        }).then(function(response){
            console.log(response)
            return response.json();
        }).then(function(myJson){
            console.log(myJson)
            setData(myJson)
        })}
        useEffect(() => {getData()},[])

        let no = 1;
     
        return (
         
            <div>
                <form  >
                    <li> 
                        Search by name 
                            <input type="text" onChange={inputTextHandler} placeholder="name" />
                        limit
                        <select name="filter" id="filter"> 
                            <option value="30">30</option>
                            <option value="20">20</option>
                            <option value="10">10</option>
                        </select>
                    </li>
                </form>
                {
                    data.cards && data.cards.length>0 && data.cards.map((cards)=>( <li> <p>{ no++ }</p> <p>Rarity : {cards.rarity}</p><p> HP :{cards.hp}</p><img src={cards.imageUrl} alt={cards.name}/> <form >  <button type="submit">add</button></form> </li>)) 
                }
            </div>
        );
    
}

export default SearchCard;
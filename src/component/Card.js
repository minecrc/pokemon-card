import React from 'react';
import Carditem from './Carditem'

const Card = ({pokemonData}) =>{
    return pokemonData.length > 0 ? (  
    <ul>  
      {pokemonData && pokemonData.map(card =>  
        <Carditem card={card} />
      //  <li>{ card.name } </li>
      )}
       
    </ul>
    
    ): ( <div> <h1>No Res</h1> </div>);
}

export default Card;
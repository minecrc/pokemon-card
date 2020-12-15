import React, { Component } from 'react';
import ListTextComponent from './ListTextComponent';

const ListCard = ({cards}) =>{
    return(  
    <div className="list" >
    <ul className="card-list">
      {
        // cards.map((TextShow) => (
        //     <ListTextComponent key={TextShow.id} />
        // ))
      }
    </ul>
</div> );
}

export default ListCard;
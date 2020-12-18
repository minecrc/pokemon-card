import React from 'react';

function Carditem({card}) {
    // console.log('card' ,{card})
    return (
        <div>
            <h3>{card.name}</h3>
            <img src={card.imageUrl} alt={ `${card.name}`} />
        </div>
    );
}

export default Carditem;
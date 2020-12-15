import React from 'react';
import ListTextComponent from './ListTextComponent';

const List = ({ListProp,SetList}) => {
    return(
        <div className="list" >
            <ul className="card-list">
              {
                ListProp.map( (TextShow) => (
                    <ListTextComponent key={TextShow.id} SetList={SetList} ListProp={ListProp}  content={TextShow.text} id={TextShow.id} />
                ))
              }
            </ul>
        </div>
    );
}

export default List; 
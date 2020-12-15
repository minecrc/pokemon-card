import React  from 'react';
import List from './List';

const ListTextComponent = ({content,id,SetList,ListProp}) =>{
    const depleteHandler = () => {
        console.log(SetList);
        SetList(ListProp.filter(el => el.id !== id))

    }
    return(
    <div className="ListText" id={id}>
        <li className="item"> Text = {content}  </li>
        <button className="del-btn" onClick={depleteHandler} > deplete </button>
    </div>);

}

export default ListTextComponent;
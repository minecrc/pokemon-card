import React,{ useEffect,useState } from 'react';
import Axios from 'axios';


const Form = ({setPokemon}) => {
 const [searchTerm, setSearchTerm] = useState("");
 const handleOnsubmit = async e =>{
    e.preventDefault();
    console.log(searchTerm);
    setPokemon([]);
    try {
        const{ data } = await Axios.get(`http://localhost:3030/api/cards?name=${searchTerm}`)
        setPokemon(data.cards);
    } catch (error) {
        console.log(error);
    }
 }
  useEffect(() => {
      const getInotialCards = async () =>
      {try {
        const { data } = await Axios.get('http://localhost:3030/api/cards')
        setPokemon(data.cards)
        console.log('res', { data })
       } catch (err)
       {
        console.log(err);
        }
      }
      getInotialCards();
    },[]);
    return(
        <div className="search">
            SearchForm  :  
            <form  onChange={handleOnsubmit}>
                <input type="text" name="" id="" value={searchTerm} onChange={ e => setSearchTerm(e.target.value) }/>
            </form>
        </div>
    );
}

export default Form;
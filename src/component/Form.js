import React from 'react';

const Form = ({inputText,setInputText, ListProp , setList}) => {
    //Here funtion for update State in APP
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitFormHandler = (e) => {
        e.preventDefault();
        setList([
            ...ListProp ,{
                text: inputText ,
                name: "listText",
                completed: false,
                id: Math.random() * 1000
            } 
        ]);
        setInputText("");
    };
    return(
        <form>
            <input onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitFormHandler} type="submit" className="todo-button">
               <i className="fas fa-arrow-alt-circle-right"></i>
            </button>
            <div className="select">
                <select name="" id="" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">completed</option>
                    <option value="uncompleted">uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;
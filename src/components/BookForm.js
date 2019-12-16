import React, { useState, useContext } from 'react';
import { BookContext } from '../context/BookContext';

const BookForm = () => {

    const {addBook} =useContext(BookContext)
    
    const [title,setTitle] = useState('')
    const [author,setAuthor] =useState('')


    const submitHandler=(e)=>{
        e.preventDefault()
        addBook(title,author)
        setAuthor('')
        setTitle('')
    }


    return (
        <form onSubmit={submitHandler}>
            <input 
                type="text" 
                placeholder="Enter Title"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}></input>
            <input 
                type="text" 
                placeholder="Enter Author"
                required
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}></input>                
            <button>Add a Book</button>
        </form>
    );
};

export default BookForm;
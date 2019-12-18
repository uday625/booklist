import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const Navbar = () => {
    const {books} =useContext(BookContext)
    return (
        <div className="nav-bar">
            <h2>XMAS Reading List</h2>
            <p>Currently you have {books.length} books to go through...</p>
        </div>
    );
};

export default Navbar;
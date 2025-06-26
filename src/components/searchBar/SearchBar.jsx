import React from 'react';
import './SearchBar.css';

export default function SearchBar(props){
    const { searchValue, onChange } = props

    function handleSearchChange(e){
        onChange(e.target.value);        
    }
    // console.log(`Search value: ${searchValue}`);

    return(
        <div className="input-container">
            <input className="input" type="text" placeholder="Search images..." value={searchValue} onChange={handleSearchChange}></input>
        </div>
    )
}
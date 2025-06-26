import React from 'react';

export default function SearchBar(props){
    const { searchValue, onChange } = props

    function handleSearchChange(e){
        onChange(e.target.value);        
    }
    // console.log(`Search value: ${searchValue}`);

    return(
        <input className="input" type="text" placeholder="Search images..." value={searchValue} onChange={handleSearchChange}></input>
        
    )
}
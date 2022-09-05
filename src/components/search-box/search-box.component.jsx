import { Component } from "react";
import './search-box.style.css'

const SearchBox = ( props ) => {
    
    const { onChangeHandler, placeholder, className } = props;

    return (
            <input 
                type="search" 
                className={ `search-box ${className }` } 
                placeholder={ placeholder }
                onChange={ onChangeHandler } 
            />
            // If we put a function in here it would be an anon function. 
            // Donc, it would be rebuilt everytime render was called (not performant) 
    )
}

export default SearchBox
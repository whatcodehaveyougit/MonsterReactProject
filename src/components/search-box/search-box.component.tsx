import { ChangeEvent } from 'react';
import './search-box.style.css'

type SearchBoxProps = {
    className: string;
    placeholder: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}


const SearchBox = ({
    className, 
    placeholder, 
    onChangeHandler
}: SearchBoxProps ) => (
    
            <input 
                type="search" 
                className={ `search-box ${className }` } 
                placeholder={ placeholder }
                onChange={ onChangeHandler } 
            />
            // If we put a function in here it would be an anon function. 
            // Donc, it would be rebuilt everytime render was called (not performant) 
)

export default SearchBox
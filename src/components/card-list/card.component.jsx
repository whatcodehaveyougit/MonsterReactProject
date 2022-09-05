import { Component } from 'react';

const Card = ( props ) => {

    const { id, name, email } = props.monster

    return (
        <div className='card-container' key={id}>
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="" />
            <h2>{name}</h2>
        </div>
    )
}

export default Card;
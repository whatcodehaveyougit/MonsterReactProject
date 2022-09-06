import { Component } from 'react';
import './card-list.styles.css'
import Card from '../card-list/card.component'

const CardList = ( { filteredMonsters } ) => {

    return (
        <div className='card-list'>
        {
            filteredMonsters.map(monster => {
            return (
                    <Card key={monster.id} monster={monster} />
            )
            })
        }
    </div>
    )
   

}

export default CardList;   
import { Component } from 'react';
import './card-list.styles.css'
import Card from '../card-list/card.component'

const CardList = ( props ) => {

    const filteredMonsters = props.filteredMonsters

    return (
        <div className='card-list'>
            {
                filteredMonsters.map(monster => {
                return (
                        <Card monster={monster} />
                )
                })
            }
        </div>
    )

}

export default CardList;   
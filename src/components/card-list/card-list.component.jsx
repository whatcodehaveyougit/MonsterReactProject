import { Component } from 'react';
import './card-list.styles.css'
import Card from '../card-list/card.component'

class CardList extends Component {

    render() {

        console.log('render 2');
        const filteredMonsters = this.props.filteredMonsters

        return (
            <div className='card-list'>
            {
                    filteredMonsters.map(monster => {
                    // const { name, email, id } = monster; // More Destructuring !
                    return (
                            <Card monster={monster} />
                    )
                    })
                }
            </div>

        )
    }

}

export default CardList;   
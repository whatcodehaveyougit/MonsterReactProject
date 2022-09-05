import { Component } from 'react';
import './card-list.styles.css'

class CardList extends Component {

    render() {

        console.log('render 2');

        const filteredMonsters = this.props.filteredMonsters

        return (
            <div className='card-list'>
            {
                    filteredMonsters.map(monster => {
                    const { name, email, id } = monster; // More Destructuring !
                    return (
                            <div className='card-container' key={id}>
                                <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="" />
                                <h2>{name}</h2>
                            </div>
                    )
                    })
                }
            </div>

        )
    }

}

export default CardList;   
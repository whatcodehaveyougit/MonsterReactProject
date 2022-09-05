import { Component } from 'react';

class Card extends Component {

    render(){
        const { id, name, email } = this.props.monster

        return (
            <div className='card-container' key={id}>
                <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="" />
                <h2>{name}</h2>
            </div>
        )
    }
}

export default Card;
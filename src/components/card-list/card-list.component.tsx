import './card-list.styles.css'
import { Monster } from '../../App'
import Card from './card.component'


type CardListProps = {
    filteredMonsters: Monster[];
}

const CardList = ( { filteredMonsters }: CardListProps ) => {

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
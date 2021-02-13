import PokemonCard from "../../../../../../components/PokemonCard";
import s from "./style.module.css";
import cn from 'classnames'
import {useState} from "react";

const PlayerBoard = ({cards, onClickCard,player}) => {
    const [isSelected, setSelected] = useState(null);
    return (
        <>
            {cards.map(p => {
                return (
                    <div key={p.id} className={cn(s.cardBoard, {[s.selected]: isSelected === p.id})}
                         onClick={() => {
                             setSelected(p.id)
                             onClickCard && onClickCard(
                                 {
                                     ...p,
                                     player
                                 }
                                 )
                         }}>
                        <PokemonCard
                            key={p.id} id={p.id} values={p.values} img={p.img}
                            name={p.name} type={p.type} isActive={true} isSelected={p.isSelected}
                            minimize={true}/>
                    </div>)
            })}
        </>
    )
}

export default PlayerBoard;
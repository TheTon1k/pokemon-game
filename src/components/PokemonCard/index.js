import s from './PokemonCard.module.css'
import cardBackImg from "./assets/card-back-side.jpg"
import {useState} from "react";

const PokemonCard = ({values, id, name, img, type}) => {
    let [isActive, setActive] = useState(false)
    let handleClick = () => {
        !isActive ? setActive(true) : setActive(false)
    }
    return (
        <>
            <div className={s.root}>
                <div className={`${s.pokemonCard} ${isActive && s.active}`} onClick={handleClick}>
                    <div className={s.cardFront}>
                        <div className={`${s.wrap} ${s.front}`}>
                            <div className={`${s.pokemon} ${s[type]}`}>
                                <div className={s.values}>
                                    <div className={`{${s.count} ${s.top}`}>{values.top}</div>
                                    <div className={`${s.count} ${s.right}`}>{values.top}</div>
                                    <div className={`${s.count} ${s.bottom}`}>{values.bottom}</div>
                                    <div className={`${s.count} ${s.left}`}>{values.left}</div>
                                </div>
                                <div className={s.imgContainer}>
                                    <img src={img} alt={name}/>
                                </div>
                                <div className={s.info}>
                                    <span className={s.number}>#{id}</span>
                                    <h3 className={s.name}>{name}</h3>
                                    <small className={s.type}>Type: <span>type</span></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.cardBack}>
                        <div className={`${s.wrap} ${s.back}`}>
                            <img src={cardBackImg} alt="Сard Backed"/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default PokemonCard
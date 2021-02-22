import {useContext} from "react";
import {useHistory} from "react-router-dom";

import {PokemonContext} from "../../../../service/PokemonsContext";
import {FirebaseContext} from "../../../../service/FirebaseContext";
import {useState} from "react";
import PokemonCard from "../../../../components/PokemonCard";

import s from "./style.module.css";
import ArrowChoice from "../Board/component/Turn";


const FinishPage = () => {
    const firebase = useContext(FirebaseContext)
    const history = useHistory()
    const {poke, enemyPoke, winner, handleResetPokemonProvider} = useContext(PokemonContext)
    const [selectedPokemon, setSelectedPokemon] = useState(null)
    if (enemyPoke.length <= 0) {
        history.replace('/game')
    }

    const handlerEndGame = () => {
        if (selectedPokemon) {
            firebase.addPokemon(selectedPokemon)
        }
        handleResetPokemonProvider()
        setSelectedPokemon(null)
        history.push('/game')


    }

    const handleSetPockemon = (pokemonData) => {
        setSelectedPokemon(pokemonData)
    }

    return (
        <>
            <div className={s.finishCards}>
                {Object.entries(poke).map(([key, {id, values, img, name, type}]) =>
                    <PokemonCard
                        key={key} className={s.card}
                        id={id} values={values} img={img}
                        name={name} type={type} isActive={true}/>
                )}
            </div>
            <div className={s.centerButton}>
                <button onClick={() => handlerEndGame()}>
                    End Game
                </button>
            </div>
            <div className={s.finishCards}>
                {enemyPoke.map(p =>
                    <div onClick={() => winner === 'p1' && handleSetPockemon(p)} className={s.wrapper}>
                        <PokemonCard
                            key={p.id}
                            className={winner === 'p1' && selectedPokemon&& p.id === selectedPokemon.id && s.selected}
                            id={p.id} values={p.values} img={p.img}
                            name={p.name} type={p.type} isActive={true}/>
                    </div>
                )}
            </div>
        </>
    )
}
export default FinishPage
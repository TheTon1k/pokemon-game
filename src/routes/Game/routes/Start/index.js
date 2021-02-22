import s from "./style.module.css";
import PokemonCard from "../../../../components/PokemonCard";
import {useState, useEffect, useContext} from "react";
import {FirebaseContext} from "../../../../service/FirebaseContext";
import {useHistory} from "react-router-dom";
import {PokemonContext} from "../../../../service/PokemonsContext";


const StartPage = () => {
    let history = useHistory()
    const firebase = useContext(FirebaseContext)
    const pokContext = useContext(PokemonContext)

    let [pokemons, setPokemons] = useState({})

    useEffect(() => {
        firebase.getPokemonsSocket((pokemons) => {
            setPokemons(pokemons)
        })
        return () => firebase.offPokemonsSocket();
    }, [])

    const handleSetSelect = (key) => {
        const pokemon = {...pokemons[key]}
        pokContext.addSelectedPokemon(key, pokemon)

        setPokemons(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                isSelected: !prevState[key].isSelected
            }
        }))

    }


    return (
        <>
            <div className={s.centerButton}>
                <button onClick={() => history.push('game/board')} disabled={Object.keys(pokContext.poke).length < 5 }>Start Game</button>
            </div>
            <div className={s.flex}>
                {
                    Object.entries(pokemons).map(([key, {id, values, img, name, type, isSelected}]) =>
                            <PokemonCard
                                key = {key}
                                className={s.card}
                                id={id} values={values} img={img}
                                name={name} type={type} onClickCard={() => {
                                if (Object.keys(pokContext.poke).length < 5 || isSelected) {
                                    handleSetSelect(key)
                                }
                            }}
                                isActive={true}
                                isSelected={isSelected}/>)
                }
            </div>
        </>
    )
}

export default StartPage;
import s from "./style.module.css";
import PokemonCard from "../../../../components/PokemonCard";
import {useState,useEffect,useContext} from "react";
import {FirebaseContext} from "../../../../service/FirebaseContext";
import {useHistory} from "react-router-dom";
import {PokemonContext} from "../../../../service/PokemonsContext";


const StartPage = () => {
    let history = useHistory()
    const firebase = useContext(FirebaseContext)
    const pokContext = useContext(PokemonContext)
    let handlerSetPoke =(pokemon)=>{
        let arr = pokContext.poke
        arr.push(pokemon)
        pokContext.addSelectedPokemon(arr)
    }
    let [pokemons, setPokemons] = useState({})

    useEffect(() => {
        firebase.getPokemonsSocket((pokemons) => {
            setPokemons(pokemons)
        })
    }, [])

    const handleSetActive = (pokemonId) => {

        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === pokemonId) {
                    pokemon.isActive = !pokemon.isActive;
                    firebase.postPokemon(item[0], pokemon)
                    pokemon.isSelected = !pokemon.isSelected
                    handlerSetPoke(pokemon)
                }
                acc[item[0]] = pokemon;

                return acc;
            }, {});
        });
    }

    const handleAddNewPokemon = () => {
        firebase.addPokemon()
    }


    return (
        <div>
            <div className={s.centerButton}>
                <button onClick={handleAddNewPokemon}>Add pokemon</button>
                <button onClick={() => history.push('game/board')}>Start Game</button>
            </div>
            <div className={s.flex}>
                {
                    Object.entries(pokemons).map(([key, {id, values, img, name, type, isActive = true}]) =>
                        <div className={s.root} key={key}>
                            <PokemonCard
                                 id={id} values={values} img={img}
                                name={name} type={type} isActive={isActive} onClickCard={handleSetActive}/>
                        </div>)
                }
            </div>
        </div>
    )
}

export default StartPage;
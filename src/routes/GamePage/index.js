import s from "../HomePage/style.module.css";
import PokemonCard from "../../components/PokemonCard";
import Layout from "../../components/Layout";
import {useState} from "react";
import {useEffect} from "react";
import database, {changeCardStatus} from "../../service/firebase";


const GamePage = () => {


    let [pokemonsList, setPokemons] = useState({})

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val())
        })
    }, [])

    const handleSetActive = (unicKey, pokemonId) => {

        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === pokemonId) {
                    pokemon.isActive = !pokemon.isActive;
                    changeCardStatus(unicKey, pokemon.isActive)
                }
                acc[item[0]] = pokemon;

                return acc;
            }, {});
        });
    }

    const handleAddNewPokemon = () => {
        let newPoke = {
            "abilities" : [ "keen-eye", "tangled-feet", "big-pecks" ],
            "base_experience" : 122,
            "height" : 11,
            "id" : Math.floor(Math.random()*100),
            "img" : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
            "name" : "newPoke",
            "stats" : {
                "attack" : 60,
                "defense" : 55,
                "hp" : 63,
                "special-attack" : 50,
                "special-defense" : 50,
                "speed" : 71
            },
            "type" : "flying",
            "values" : {
                "bottom" : 7,
                "left" : 5,
                "right" : 2,
                "top" : "A"
            }
        }
        const newPostKey = database.ref().child('pokemons').push().key;
        database.ref('pokemons/' + newPostKey).set(newPoke);
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val())
        })

    }


    return (
        <div>
            <Layout id={2} title='Cards' colorBg='yellow'>
               <div className={s.centerButton}><button onClick={handleAddNewPokemon}>Add pokemon</button></div>

                <div className={s.flex}>
                    {
                        Object.entries(pokemonsList).map(([key, {id, values, img, name, type, isActive}]) =>
                            <PokemonCard
                                key={key} unicKey={key} id={id} values={values} img={img}
                                name={name} type={type} isActive={isActive} handleSetActive={handleSetActive}/>)
                    }
                </div>
            </Layout>
        </div>
    )
}

export default GamePage;
import {Route, Switch, useRouteMatch} from "react-router-dom";
import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";
import {PokemonContext} from "../../service/PokemonsContext";
import {useState} from "react";

const GamePage = () => {
    const match = useRouteMatch();
    const [selectedPokemons, setSelectedPokemons] = useState({})
    const [player2Poke, setPlayer2Poke] = useState([])
    const [winner, setWinner] = useState(null)

    const handlerChangeSelectedPokemons = (key, pokemon) => {
        setSelectedPokemons(prevState => {
            if (prevState[key]) {
                const copyState = {...prevState}
                delete copyState[key]
                return copyState
            }
            return {
                ...prevState,
                [key]: pokemon
            }
        })
    }
    const handleResetPokemonProvider =()=>{
        setSelectedPokemons({})
        setWinner(null)
        setPlayer2Poke([])
    }

    const handleSetWinner = (winnner) => {
        setWinner(winnner)
    }

    const handlerAddPlayer2Poke = (pokemon) => setPlayer2Poke(pokemon)


    return (
        <PokemonContext.Provider value={{
            poke: selectedPokemons,
            addSelectedPokemon: handlerChangeSelectedPokemons,
            enemyPoke: player2Poke,
            handlerAddPlayer2Poke,
            winner: winner,
            handleSetWinner,
            handleResetPokemonProvider

        }}>
            <Switch>
                <Route path={`${match.path}/`} exact><StartPage setPokemon={1}/> </Route>
                <Route path={`${match.path}/board`} component={BoardPage}/>
                <Route path={`${match.path}/finish`} component={FinishPage}/>
            </Switch>
        </PokemonContext.Provider>
    );
};

export default GamePage
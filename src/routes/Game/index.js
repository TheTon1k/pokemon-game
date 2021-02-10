import {Route, Switch, useRouteMatch} from "react-router-dom";
import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";
import {PokemonContext} from "../../service/PokemonsContext";
import {useState} from "react";

const GamePage = () => {
    const match = useRouteMatch();
    const [selectedPokemons, setSelectedPokemons] = useState([])
    const handlerChangeSelectedPokemons = (val) => {
        setSelectedPokemons(val)
    }

    return (
        <PokemonContext.Provider value={{
            poke: selectedPokemons,
            addSelectedPokemon: handlerChangeSelectedPokemons
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
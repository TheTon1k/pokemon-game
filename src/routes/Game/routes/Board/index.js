import s from './style.module.css';
import {} from "../../../../service/FirebaseContext";
import {useContext} from "react";
import {PokemonContext} from "../../../../service/PokemonsContext";
import PokemonCard from "../../../../components/PokemonCard";

const BoardPage = () => {
    const pokContext = useContext(PokemonContext)
    console.log(pokContext)
    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                {pokContext.poke.map(p=>{
                  return  <PokemonCard
                        key={p.id}  id={p.id} values={p.values} img={p.img}
                        name={p.name} type={p.type} isActive={true} className={true} isSelected={p.isSelected} minimize ={true} />
                })}
            </div>
            <div className={s.board}>
                <div className={s.boardPlate}>1</div>
                <div className={s.boardPlate}>2</div>
                <div className={s.boardPlate}>3</div>
                <div className={s.boardPlate}>4</div>
                <div className={s.boardPlate}>5</div>
                <div className={s.boardPlate}>6</div>
                <div className={s.boardPlate}>7</div>
                <div className={s.boardPlate}>8</div>
                <div className={s.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;
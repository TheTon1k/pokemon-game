import {useContext} from "react";
import {useHistory} from 'react-router-dom'
import {PokemonContext} from "../../../../service/PokemonsContext";
import PokemonCard from "../../../../components/PokemonCard";

import s from './style.module.css';
import {useEffect, useState} from "react";
import PlayerBoard from "./component/PlayerBoard";
import Result from "./component/Result";

const counterWin = (board, player1, player2) => {
    let player1Count = player1.length
    let player2Count = player2.length

    board.forEach(item => {
        if (item.card.possession === 'red') {
            player2Count++
        } else if (item.card.possession === 'blue') {
            player1Count++
        }
    })
    return [player1Count, player2Count]
}

const BoardPage = () => {
    const {poke, handlerAddPlayer2Poke, handleSetWinner, winner} = useContext(PokemonContext)
    const [board, setBoard] = useState([])
    const [player1, setPlayer1] = useState(() => {
        return Object.values(poke).map(p => ({
            ...p,
            possession: "blue"
        }))
    })

    const [player2, setPlayer2] = useState([])
    const [choiceCard, setChoiceCard] = useState(null)
    const [steps, setSteps] = useState(0)

    const history = useHistory()

    useEffect(async () => {
        const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
        const boardRequest = await boardResponse.json();
        setBoard(boardRequest.data)

        const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player')
        const player2Request = await player2Response.json()
        setPlayer2(() => {
            console.log(...player2Request.data)
            handlerAddPlayer2Poke([...player2Request.data])
            return player2Request.data.map(p => ({
                ...p,
                possession: "red"
            }))
        })
    }, [])

    const handleClickBoardPlate = async (position) => {

        if (choiceCard) {
            const params = {
                position,
                card: choiceCard,
                board
            }

            const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)

            })
            const request = await res.json()

            if (choiceCard.player === 1) {
                setPlayer1(prevState => prevState.filter(p => p.id !== choiceCard.id))
                setChoiceCard(null)
            } else if (choiceCard.player === 2) {
                setPlayer2(prevState => prevState.filter(p => p.id !== choiceCard.id))
                setChoiceCard(null)
            }
            setBoard(request.data)

            setSteps(prevState => {
                const count = prevState + 1
                return count
            })
        }
    }

    useEffect(() => {
        if (steps === 9) {
            const [count1, count2] = counterWin(board, player1, player2)
            if (count1 > count2) {
                handleSetWinner('p1')

            } else if (count1 < count2) {
                handleSetWinner('p2')
            } else {
                handleSetWinner('draw')

            }
            // history.replace('/game/finish')
        }
    }, [steps])

    if (Object.keys(poke).length === 0) {
        history.replace('/game')
    }

    const handlerChangeLocation = () => {
        history.replace('/game/finish')
    }

    return (
        <>
            <div className={s.root}>
                {winner && <Result type={winner} changeLocation={handlerChangeLocation}/>}
                <div className={s.playerOne}>
                    <PlayerBoard cards={player1}
                                 player={1}
                                 onClickCard={(card) => {
                                     setChoiceCard(card)
                                 }}
                    />
                </div>
                <div className={s.board}>
                    {
                        board.map(item => (
                            <div key={item.position} className={s.boardPlate}
                                 onClick={() => !item.card && handleClickBoardPlate(item.position)}>
                                {
                                    item.card && <PokemonCard{...item.card} isActive={true} minimize/>
                                }
                            </div>
                        ))
                    }
                </div>
                <div className={s.playerTwo}>
                    <PlayerBoard cards={player2}
                                 player={2}
                                 onClickCard={(card) => {
                                     setChoiceCard(card)
                                 }}
                    />
                </div>
            </div>
        </>
    );
};

export default BoardPage;
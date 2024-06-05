import { useState } from "react"
import Square from "./Square"
import { Button } from "primereact/button"
import axios from "../lib/axios"
import { useNavigate } from "react-router-dom"
import StatsTable from "./StatsTable"

export type BoardProps = {
    names: string[]
}

export default function Board({ names }: BoardProps) {
    const initialStats = {
        players: names,
        wins: {
            [names[0]]: 0,
            [names[1]]: 0,
        },
        losses: {
            [names[0]]: 0,
            [names[1]]: 0,
        },
        draws: 0,
    }

    const navigate = useNavigate()

    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const [stats, setStats] = useState(initialStats)

    const winner = getWinner(squares)
    const winnerName = winner === "X" ? names[0] : winner === "O" ? names[1] : null
    const loserName = winner === "X" ? names[1] : winner === "O" ? names[0] : null
    const isDraw = squares.every(square => square !== null) && !winner
    const gameIsFinished = winner || isDraw

    let status = winner
        ? `${winnerName} wins!`
        : isDraw
          ? "It's a draw!"
          : `It's your turn, ${xIsNext ? `${names[0]} (✖️)` : `${names[1]} (⭕️)`}!`

    function handleClick(index: number) {
        if (squares[index] || winner) {
            return
        }

        const nextSquares = squares.slice()
        nextSquares[index] = xIsNext ? "X" : "O"

        setSquares(nextSquares)
        setXIsNext(!xIsNext)
    }

    function updateStats() {
        const prevStats = stats

        if (winner && winnerName && loserName) {
            prevStats.wins[winnerName] = prevStats.wins[winnerName] + 1
            prevStats.losses[loserName] = prevStats.losses[loserName] + 1

            setStats(prevStats)
        } else if (isDraw) {
            prevStats.draws = prevStats.draws + 1

            setStats(prevStats)
        }
    }

    function resetGame() {
        setSquares(Array(9).fill(null))
        setXIsNext(true)
    }

    function handleContinue() {
        updateStats()
        resetGame()
    }

    async function handleStop() {
        updateStats()
        resetGame()

        await axios.post("/games", {
            stats,
        })

        setStats(initialStats)

        navigate("/")
    }

    return (
        <div>
            <div className="mt-8 space-y-4 text-center text-3xl">
                <p>{status}</p>
            </div>

            <StatsTable game={stats} />

            <div className="mx-auto mt-4 grid w-[300px] border-collapse grid-cols-3">
                {squares.map((square, index) => (
                    <Square key={index} value={square} onSquareClick={() => handleClick(index)} />
                ))}
            </div>

            {gameIsFinished && (
                <div className="mt-4 flex gap-x-2">
                    <Button className="w-full" label="Continue" onClick={handleContinue} />
                    <Button className="w-full" severity="danger" label="Stop" onClick={handleStop} />
                </div>
            )}
        </div>
    )
}

function getWinner(squares: string[]) {
    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (let i = 0; i < winningLines.length; i++) {
        const [a, b, c] = winningLines[i]

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }

    return null
}

import { useState } from "react"
import Square from "./Square"
import { Button } from "primereact/button"

export type BoardProps = {
    names: string[]
}

export default function Board({ names }: BoardProps) {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)

    const winner = getWinner(squares) === "X" ? names[0] : getWinner(squares) === "O" ? names[1] : null

    const isDraw = squares.every(square => square !== null) && !winner

    const gameIsFinished = winner || isDraw

    let status = winner
        ? "Winner: " + winner
        : isDraw
          ? "It's a draw!"
          : `It's your turn, ${xIsNext ? names[0] : names[1]}!`

    function handleClick(index: number) {
        if (squares[index] || getWinner(squares)) {
            return
        }

        const nextSquares = squares.slice()

        nextSquares[index] = xIsNext ? "X" : "O"

        setSquares(nextSquares)
        setXIsNext(!xIsNext)
    }

    return (
        <div>
            <div className="text-center text-3xl">{status}</div>

            <div className="mt-4 grid grid-cols-3">
                {squares.map((square, index) => (
                    <Square key={index} value={square} onSquareClick={() => handleClick(index)} />
                ))}
            </div>

            {gameIsFinished && (
                <div className="mt-4">
                    <Button className="w-full" label="Start New Game" onClick={() => setSquares(Array(9).fill(null))} />
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

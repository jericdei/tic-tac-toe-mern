import { Button } from "primereact/button"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "../lib/axios"
import { Card } from "primereact/card"
import StatsTable from "../components/StatsTable"

export default function Index() {
    const [games, setGames] = useState([])

    useEffect(() => {
        const getGames = async () => {
            const { data } = await axios.get("/games")

            setGames(data.games)
        }

        getGames()
    }, [])

    return (
        <>
            <main className="grid h-screen place-items-center text-center">
                <div className="p-16">
                    <h1 className="text-6xl font-bold">Tic-Tac-Toe</h1>

                    <div className="mt-8 flex justify-center">
                        <Link to={"/game"}>
                            <Button label="Start New Game" />
                        </Link>
                    </div>

                    <div className="mt-16">
                        {games.length === 0 ? (
                            <p className="p-4 text-xl">No previous games found. Start a new one!</p>
                        ) : (
                            <div>
                                <h2 className="text-3xl font-bold">Previous Games</h2>

                                <div className="mt-8 grid grid-cols-2 gap-4">
                                    {games.map((game: any) => (
                                        <Card
                                            key={game._id}
                                            title={`Game ID: ${game._id}`}
                                            pt={{ title: () => ({ className: "text-lg" }) }}
                                        >
                                            <p className="p-4 text-xl">
                                                {game.players[0]} vs. {game.players[1]}
                                            </p>

                                            <StatsTable game={game} />
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    )
}

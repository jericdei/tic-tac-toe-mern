import { Button } from "primereact/button"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "../lib/axios"

export default function Index() {
    const [games, setGames] = useState([])

    useEffect(() => {
        const getGames = async () => {
            const { data } = await axios.get("/games")

            setGames(data.games)
        }

        getGames()
    })

    return (
        <>
            <main className="grid h-screen w-screen place-items-center">
                <div className="p-4">
                    <h1 className="text-6xl font-bold">Tic-Tac-Toe</h1>

                    <div className="mt-8">
                        <pre>{games.length}</pre>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <Link to={"/game"}>
                            <Button label="Start New Game" />
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}

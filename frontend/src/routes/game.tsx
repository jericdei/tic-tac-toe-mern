import { useEffect, useState } from "react"
import NameDialog from "../components/NameDialog"
import Board from "../components/Board"

export default function Game() {
    const [nameDialogIsVisible, setNameDialogIsVisible] = useState(false)
    const [names, setNames] = useState(["", ""])
    const [gameStarted, setGameStarted] = useState(false)

    useEffect(() => {
        if (names[0] === "" || names[1] === "") {
            setNameDialogIsVisible(true)
        }
    }, [])

    return (
        <>
            {gameStarted && (
                <>
                    <main className="grid h-screen w-screen place-items-center">
                        <div className="p-4">
                            {names[0] !== "" ||
                                (names[1] !== "" && (
                                    <p className="mt-8 text-center text-2xl">
                                        {names[0]} vs. {names[1]}
                                    </p>
                                ))}

                            {names ? <Board names={names} /> : <p></p>}
                        </div>
                    </main>
                </>
            )}

            <NameDialog
                visible={nameDialogIsVisible}
                setVisible={setNameDialogIsVisible}
                names={names}
                setNames={setNames}
                setGameStarted={setGameStarted}
            />
        </>
    )
}

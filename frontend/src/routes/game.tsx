import { useEffect, useState } from "react"
import NameDialog from "../components/NameDialog"
import Board from "../components/Board"

export default function Game() {
    const [nameDialogIsVisible, setNameDialogIsVisible] = useState(false)
    const [names, setNames] = useState(["", ""])
    const [gameStarted, setGameStarted] = useState(false)

    const namesAreSet = names[0] !== "" && names[1] !== ""

    useEffect(() => {
        if (!namesAreSet) {
            setNameDialogIsVisible(true)
        }
    }, [])

    return (
        <>
            {namesAreSet && gameStarted && (
                <main className="grid h-screen w-screen place-items-center">
                    <div>{names && <Board names={names} />}</div>
                </main>
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

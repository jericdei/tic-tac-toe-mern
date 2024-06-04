import { Dialog } from "primereact/dialog"
import { InputText } from "primereact/inputtext"
import { FloatLabel } from "primereact/floatlabel"
import { Button } from "primereact/button"

export type NameDialogProps = {
    visible: boolean
    setVisible: (visible: boolean) => void
    names: string[]
    setNames: (names: string[]) => void
    setGameStarted: (gameStarted: boolean) => void
}

export default function NameDialog({ visible, setVisible, names, setNames, setGameStarted }: NameDialogProps) {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (names[0] === "" || names[1] === "") {
            // TODO: show error

            return
        }

        setGameStarted(true)
        setVisible(false)
    }

    return (
        <Dialog
            visible={visible}
            onHide={() => setVisible(false)}
            closable={false}
            header="Enter Player Names"
            draggable={false}
        >
            <div className="mt-8 flex flex-col gap-8">
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center gap-4">
                        <div>
                            <FloatLabel>
                                <InputText
                                    id="player_one"
                                    className="w-full"
                                    value={names[0]}
                                    onChange={e => setNames([e.target.value, names[1]])}
                                />
                                <label htmlFor="player_one">Player 1</label>
                            </FloatLabel>
                        </div>

                        <div>
                            <FloatLabel>
                                <InputText
                                    id="player_two"
                                    className="w-full"
                                    value={names[1]}
                                    onChange={e => setNames([names[0], e.target.value])}
                                />
                                <label htmlFor="player_two">Player 2</label>
                            </FloatLabel>
                        </div>
                    </div>

                    <Button className="mt-8 w-full" type="submit" label="Start Game" />
                </form>
            </div>
        </Dialog>
    )
}

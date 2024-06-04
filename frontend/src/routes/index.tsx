import { Button } from "primereact/button"
import { Link } from "react-router-dom"

export default function Index() {
    return (
        <>
            <main className="grid h-screen w-screen place-items-center">
                <div className="p-4">
                    <h1 className="text-6xl font-bold">Tic-Tac-Toe</h1>

                    <div className="mt-8">
                        <pre className="text-center">list of previous games here</pre>
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

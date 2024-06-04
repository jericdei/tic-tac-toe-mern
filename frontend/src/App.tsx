import { Button } from "primereact/button"

function App() {
    return (
        <>
            <main className="grid h-screen w-screen place-items-center">
                <div className="p-4">
                    <h1 className="text-6xl font-bold">Tic-Tac-Toe</h1>

                    <div className="mt-8">
                        <pre className="text-center">list of previous games here</pre>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <Button label="New Game" />
                    </div>
                </div>
            </main>
        </>
    )
}

export default App

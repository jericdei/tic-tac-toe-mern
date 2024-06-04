import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { PrimeReactProvider } from "primereact/api"
import Index from "./routes/index.tsx"
import Game from "./routes/game.tsx"

import "./index.css"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
    },
    {
        path: "/game",
        element: <Game />,
    },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <PrimeReactProvider>
            <RouterProvider router={router} />
        </PrimeReactProvider>
    </React.StrictMode>,
)

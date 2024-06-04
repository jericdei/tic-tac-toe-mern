import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"

import { PrimeReactProvider } from "primereact/api"
import Tailwind from "primereact/passthrough/tailwind"
import { twMerge } from "tailwind-merge"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <PrimeReactProvider
        value={{
            unstyled: true,
            pt: Tailwind,
            ptOptions: { mergeSections: true, mergeProps: true, classNameMergeFunction: twMerge },
        }}
    >
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </PrimeReactProvider>,
)

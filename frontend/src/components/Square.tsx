export type SquareProps = {
    value: string
    onSquareClick: () => void
}

export default function Square({ value, onSquareClick }: SquareProps) {
    return (
        <button
            className="h-28 w-28 border border-gray-400 bg-gray-200 text-5xl dark:bg-gray-700 dark:text-white dark:hover:bg-gray-500"
            onClick={onSquareClick}
        >
            {value === "X" ? "✖️" : value === "O" ? "⭕" : null}
        </button>
    )
}

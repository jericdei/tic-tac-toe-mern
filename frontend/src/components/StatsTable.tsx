export type StatsTableProps = {
    game: {
        players: string[]
        wins: any
        losses: any
        draws: number
    }
}

export default function StatsTable({ game }: StatsTableProps) {
    return (
        <div className="mx-auto mt-8 w-[250px]">
            <table className="w-full border-collapse border dark:border-gray-500">
                <thead>
                    <tr>
                        <th className="border border-slate-600 text-center"></th>
                        <th className="border border-slate-600 text-center">{game.players[0]}</th>
                        <th className="border border-slate-600 text-center">{game.players[1]}</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="border border-slate-600 text-center">Wins</td>
                        <td className="border border-slate-600 text-center">{game.wins[game.players[0]]}</td>
                        <td className="border border-slate-600 text-center">{game.wins[game.players[1]]}</td>
                    </tr>

                    <tr>
                        <td className="border border-slate-600 text-center">Losses</td>
                        <td className="border border-slate-600 text-center">{game.losses[game.players[0]]}</td>
                        <td className="border border-slate-600 text-center">{game.losses[game.players[1]]}</td>
                    </tr>

                    <tr>
                        <td className="border border-slate-600 text-center">Draws</td>
                        <td className="border border-slate-600 text-center">{game.draws}</td>
                        <td className="border border-slate-600 text-center">{game.draws}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

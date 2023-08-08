'use client'
import { RootState } from '@/app/store/store'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Players() {
    const team1 = useSelector((state: RootState) => state.tournamentReducer.teamOne);
    const pointsTeam1 = useSelector((state: RootState) => state.tournamentReducer.pointsTeam1);
    const team2 = useSelector((state: RootState) => state.tournamentReducer.teamTwo);
    const pointsTeam2 = useSelector((state: RootState) => state.tournamentReducer.pointsTeam2);

    return (
        <div>
            <h2>Players</h2>
            <table>
                <thead>
                    <tr>
                        <th>Team One</th>
                        <th>Team Two</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        [0, 1].map((p, index) =>
                            <tr key={index}>
                                <td>{team1[p] ?? "Open Spot"}</td>
                                <td>{team2[p] ?? "Open Spot"}</td>
                            </tr>)
                    }
                    <tr>
                        <td>Score: {pointsTeam1}</td>
                        <td>Score: {pointsTeam2}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

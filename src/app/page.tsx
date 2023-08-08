'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Players from './components/players/Players'
import ReduxProvider from './store/provider'
import { playRally } from './store/features/slice'
import AddPlayers from './components/AddPlayers/AddPlayers'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store/store'

export default function Home() {
  const teamOne = useSelector((state: RootState) => state.tournamentReducer.teamOne);
  const pointsTeam1 = useSelector((state: RootState) => state.tournamentReducer.pointsTeam1);
  const teamTwo = useSelector((state: RootState) => state.tournamentReducer.teamTwo);
  const gameOver = useSelector((state: RootState) => state.tournamentReducer.gameOver);
  const dispatch = useDispatch();

  const totalPlayers = teamOne.length + teamTwo.length;

  return (
    <main>
      <h1>Pickleball Tournament</h1>
      <Players></Players>
      {((totalPlayers < 4) && !gameOver) && <><br /><AddPlayers></AddPlayers></>}
      {((totalPlayers === 4) && !gameOver) && <><br /><button onClick={() => dispatch(playRally())}>Play Rally</button></>}
      {gameOver && <><br />Game Over! Team {pointsTeam1 === 11 ? 'One' : 'Two'} won!!</>}
    </main>
  )
}

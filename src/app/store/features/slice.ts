import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = {
    teamOne: string[];
    teamTwo: string[];
    pointsTeam1: number;
    pointsTeam2: number;
    gameOver: boolean;
};

const initialState: InitialState = {
    teamOne: [],
    teamTwo: [],
    pointsTeam1: 0,
    pointsTeam2: 0,
    gameOver: false
};

const tournamentSlice = createSlice({
    name: 'pickleballApp',
    initialState,
    reducers: {
        addPlayer: (state, action: PayloadAction<string>) => {
            if(state.teamOne.length + state.teamTwo.length < 4) {
                state.teamOne.length < 2 ? 
                    state.teamOne.push(action.payload) :
                    state.teamTwo.push(action.payload);
            }
        },
        playRally: (state) => {
            if(!state.gameOver) {
                switch (Math.random().toFixed()) {
                    case '0':
                        state.pointsTeam1++;
                        state.gameOver = state.pointsTeam1 > 10;
                        break;
                    case '1':
                        state.pointsTeam2++;
                        state.gameOver = state.pointsTeam2 > 10;
                        break;
                }
            }
        },
    },
});

export const { addPlayer, playRally } = tournamentSlice.actions;
export default tournamentSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import tournamentReducer from '@/app/store/features/slice';

export const store = configureStore({
  reducer: {
    tournamentReducer
  },
});
export type RootState = ReturnType<typeof store.getState>;

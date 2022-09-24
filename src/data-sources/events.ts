import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRaceEvent, IEvent, IResponseWithPagination } from '../models/events';

interface IStateEvent {
  loading: boolean;
  raceEvent: IRaceEvent | undefined;
  eventsByType: IResponseWithPagination<Array<IEvent>> | undefined;
}

const initialState: IStateEvent = {
  loading: false,
  raceEvent: undefined,
  eventsByType: undefined
};

const eventStore = createSlice({
  name: 'role',
  initialState,
  reducers: {
    reducerLoadingRaceEvents: (state: IStateEvent, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    reducerUpdateRaceEvent: (state: IStateEvent, action: PayloadAction<IRaceEvent>) => {
      state.raceEvent = action.payload;
    },
    reducerUpdateEventByType: (state: IStateEvent, action: PayloadAction<IResponseWithPagination<Array<IEvent>>>) => {
      state.eventsByType = action.payload;
    },
  }
});

export const {
  reducerLoadingRaceEvents,
  reducerUpdateRaceEvent,
  reducerUpdateEventByType
} = eventStore.actions;

export default eventStore.reducer;

import { useAppDispatch } from "src/app/hooks";
import { reducerLoadingRaceEvents, reducerUpdateRaceEvent } from "src/data-sources/events";
import { IResponseRaceEvent } from "src/models/events";
import httpClient from "./setup";

export const useEvents = ()=> {
    const dispatch = useAppDispatch();

    const getRaceEvents = async () => {
        dispatch(reducerLoadingRaceEvents(true));
        try{
            const response = await httpClient.get<IResponseRaceEvent>('/race-events');
            if(response.status === 200){
                const raceEvent = response.data.data;
                dispatch(reducerUpdateRaceEvent(raceEvent));
            }
            dispatch(reducerLoadingRaceEvents(false));
            
        }catch(e){
            dispatch(reducerLoadingRaceEvents(false));
            
        }
         
    }
    return { getRaceEvents };
}
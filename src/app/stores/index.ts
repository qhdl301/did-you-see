import {Subject} from 'rxjs';
import {ActionTypes} from './actions';

type InitialState = {
    movieList: Array<Object>;
}

let state: InitialState = {
    movieList: [],
};

type Event = {
    type: String;
    payload?: Object;
}
    
export const store = new Subject<InitialState>();
export const eventDispatcher = new Subject<Event>();

eventDispatcher.subscribe((data: Event) => {
    switch (data.type) {
    case ActionTypes.GET_DAILY_MOVIE_LIST:
        
        store.next(state);
        break;

    case ActionTypes.CREATE_DAILY_MOVIE_LIST:
       
        break;

    case ActionTypes.DELETE_DAILY_MOVIE_LIST:

        break;
    default:
        break;
    }
});
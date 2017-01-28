
const EVENTBRITE_TOKEN = 'RBGIH2FYQECGSUPWHD7Z';
const EVENTBRITE_URL ='https://www.eventbriteapi.com/v3/events/search/?token='+EVENTBRITE_TOKEN;

export const  FETCH_EVENTS = 'FETCH_EVENTS';

export function fetchEvents() {
  const url = EVENTBRITE_URL+'&location.latitude=50.110924&location.longitude=8.682127&location.within=25km';

  return {
    type: FETCH_EVENTS
  }

}







// import { combineReducers } from 'redux';
//
// const rootReducer = combineReducers({
//   state: (state = {}) => state
// });
//
// export default rootReducer;

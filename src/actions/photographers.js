import api from '../services/apiRequests';
import { formatJSON } from '../helpers/sanitizers';

export function fetchPhotographers(){
  return function(dispatch){
    dispatch({type: "FETCHING_PHOTOGRAPHERS"})
      return api().photographers.fetch()
        .then(json => {
          dispatch({
            type: "FETCHED_PHOTOGRAPHERS",
            payload: formatJSON(json)
          })
        })
  }
}

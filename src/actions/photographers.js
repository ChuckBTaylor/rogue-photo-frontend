import api from '../services/apiRequests';
import { formatJSON } from '../helpers/sanitizers';

export function fetchPhotographers(){
  return function(dispatch){
    dispatch({type: "FETCHING_PHOTOGRAPHERS"})
    
  }
}

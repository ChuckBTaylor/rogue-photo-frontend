import api from '../services/apiRequests';
import { formatJSON } from '../helpers/sanitizers'

export function fetchGalleries(){
  return function(dispatch){
    dispatch({type: "FETCHING_GALLERIES"})
    return api().galleries.fetch()
      .then(json => {
        const formatted = formatJSON(json)
        console.log(formatted);
        dispatch({type: "FETCHED_GALLERIES", payload: formatted})
      })
  }
}

export function fetchGallery(id){
  return function(dispatch){
    dispatch({type: "FETCHING_GALLERY", payload: id})
    return api().galleries.show(id)
      .then(json => {
        console.log(json)
        dispatch({type: "FETCHED_GALLERY", payload: json})
      })
  }
}

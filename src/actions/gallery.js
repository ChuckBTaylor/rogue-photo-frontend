import api from '../services/apiRequests';

export function fetchGalleries(){
  return function(dispatch){
    dispatch({type: "FETCHING_GALLERIES"})
    return api().galleries.fetch()
      .then(json => {
        console.log(json)
        dispatch({type: "FETCHED_GALLERIES", payload: json})
      })
  }
}

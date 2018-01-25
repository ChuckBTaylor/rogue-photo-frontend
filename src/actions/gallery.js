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

export function chooseGallery(id){
  return {
    type: "CHOOSE_GALLERY",
    payload: id
  }
}

export function postGallery(galleryName, tags){
  return function(dispatch){
    dispatch({type: "POSTING_GALLERY"})
    return api().galleries.postNew(galleryName, tags)
      .then(json => {
        console.log(json);
        dispatch({
          type: "POSTED_GALLERY",
          payload: json
        })
      })
  }
}

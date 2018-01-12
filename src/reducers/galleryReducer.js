export default function galleryReducer(state={
list: {},
isFetching: false
}, action){
  switch(action.type){
    case "FETCHING_GALLERIES":
      return {...state, isFetching: true};

    case "FETCHED_GALLERIES":
      return {...state, isFetching: false, list: action.payload}
    
    default:
      return state;
  }
}

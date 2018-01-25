export default function photographerReducer(state={
list: {},
activePhotographer: 0,
isFetching: false,
}, action){
  switch(action.type){
    case "FETCHING_PHOTOGRAPHERS":
      return {...state, isFetching: true};

    case "FETCHED_PHOTOGRAPHERS":
      return {...state, isFetching: false, list: action.payload};

    case "FETCHING_PHOTOGRAPHER":
      return {...state, activeGallery: action.payload, isFetching: true};

    case "FETCHED_PHOTOGRAPHER":
      return {...state, isFetching: false};

    default:
      return state;
  }
}

export default function galleryReducer(state={
list: {},
activeGallery: 0,
isFetching: false,
}, action){
  switch(action.type){
    case "FETCHING_GALLERIES":
      return {...state, isFetching: true};

    case "FETCHED_GALLERIES":
      return {...state, isFetching: false, list: action.payload};

    case "FETCHING_GALLERY":
      return {...state, activeGallery: action.payload, isFetching: true};

    case "FETCHED_GALLERY":
      return {...state, isFetching: false};

    default:
      return state;
  }
}

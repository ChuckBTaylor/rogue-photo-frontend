export default function galleryReducer(state={
list: {},
activeGallery: 0,
isFetching: false,
isPosting: false
}, action){
  switch(action.type){
    case "FETCHING_GALLERIES":
      return {...state, isFetching: true};

    case "FETCHED_GALLERIES":
      return {...state, isFetching: false, list: action.payload};

    case "FETCHING_GALLERY":
      return {...state, isFetching: true};

    case "FETCHED_GALLERY":
      return {...state, isFetching: false};

    case "POSTING_GALLERY":
      return {...state, isPosting: true};

    case "POSTED_GALLERY":
      return {...state, isPosting: false};

    case "CHOOSE_GALLERY":
      return {...state, activeGallery: action.payload};

    case "DESELECT_GALLERY":
      return {...state, activeGallery: 0}

    default:
      return state;
  }
}

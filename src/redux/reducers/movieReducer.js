import { SET_SEARCH,CLEAR_SEARCH, ADD_MOVIES,LOADING_MOVIES,RESET_ALL_LOADED} from "../actions/types"

export default function moviesReducer(state = {
  allLoaded: false,
  pageNumber: 1,
  loading: false,
  movies: [],
  searchKeyword: null,
}, action) {
  
    switch(action.type) {
      case ADD_MOVIES:
        return {
          ...state,
          pageNumber: state.pageNumber + 1,
          movies: [...state.movies, ...action.payload],
          allLoaded: action.payload.length < 20 ? true : false,
          loading: false,
        }

      case LOADING_MOVIES:
        return {...state, loading: true}

      case RESET_ALL_LOADED:
          return {...state, allLoaded: false, pageNumber: 1}

      case SET_SEARCH:
            return {...state, searchKeyword: action.payload}

      case CLEAR_SEARCH:
        return {...state,searchKeyword : null}
        
      default:
          return state
    }
}

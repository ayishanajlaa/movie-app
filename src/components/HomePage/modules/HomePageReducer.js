
import {LOAD_MOVIES_ERROR, LOAD_MOVIES_LOADING, LOAD_MOVIES_SUCCESS,SEARCH_MOVIES_LOADING,SEARCH_MOVIES_SUCCESS,SEARCH_MOVIES_ERROR} from "./HomePageAction";


const initialState = {
  movies: {page: '', total_results: '', total_pages: '', results: []},
  loading: false,
  error: ''
};
export default function reduxThunkReducer(state = initialState, action) {
  switch (action.type) {
      case LOAD_MOVIES_LOADING: {
          return {
              ...state,
              loading: true,
              error:''
          };
      }
      case LOAD_MOVIES_SUCCESS: {
          return {
              ...state,
              movies: action.data,
              loading: false
          }
      }
      case LOAD_MOVIES_ERROR: {
          return {
              ...state,
              loading: false,
              error: action.error
          };
      }

      case SEARCH_MOVIES_LOADING: {
        return {
            ...state,
            loading: true,
            error:''
        };
    }
    case SEARCH_MOVIES_SUCCESS: {
        return {
            ...state,
            movies: action.data,
            loading: false
        }
    }
    case SEARCH_MOVIES_ERROR: {
        return {
            ...state,
            loading: false,
            error: action.error
        };
    }

      default: {
          return state;
      }
  }
}



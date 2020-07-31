
import {MOVIE_DETAIL_VIEWING, MOVIE_DETAIL_ERROR, MOVIE_DETAIL_SUCCESS} from "./MovieDetailAction";


const initialState = {
  detail: {},
  loading: false,
  error: ''
};
export default function movieDetailReducer(state = initialState, action) {
  switch (action.type) {
      case MOVIE_DETAIL_VIEWING: {
        
          return {
              ...state,
              loading: true,
              error:''
          };
      }
      case MOVIE_DETAIL_SUCCESS: {
          return {
              ...state,
              detail: action.data,
              loading: false
          }
      }
      case MOVIE_DETAIL_ERROR: {
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



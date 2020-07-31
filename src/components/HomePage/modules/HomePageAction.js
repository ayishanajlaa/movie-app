import axios from "axios";
import * as helpers from '../../../common/helper';


export const LOAD_MOVIES_LOADING = 'LOAD_MOVIES_LOADING';
export const LOAD_MOVIES_SUCCESS = 'LOAD_MOVIES_SUCCESS';
export const LOAD_MOVIES_ERROR = 'LOAD_MOVIES_ERROR';
export const SEARCH_MOVIES_LOADING = 'SEARCH_MOVIES_LOADING';
export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';
export const SEARCH_MOVIES_ERROR = 'SEARCH_MOVIES_ERROR';





export const GetMovies = (page) => dispatch => {
    dispatch({ type: LOAD_MOVIES_LOADING });
    var language="hindi"
    const fullUrl = helpers.createMovieDbUrl('/movie/top_rated', {
        page,
        language
    });
    axios.get(fullUrl)
        .then(
            response => dispatch({ type: LOAD_MOVIES_SUCCESS, data:response.data }),
            error => dispatch({ type: LOAD_MOVIES_ERROR, error: error.message || 'Unexpected Error!!!' })
        )

}

export const SearchMovies = (query) => dispatch => {
    dispatch({ type: SEARCH_MOVIES_LOADING });
    var page=1
    const fullUrl = helpers.createMovieDbUrl('/search/movie', {
        page,
        query
      });
    axios.get(fullUrl)
        .then(
            response => dispatch({ type: SEARCH_MOVIES_SUCCESS, data:response.data }),
            error => dispatch({ type: SEARCH_MOVIES_ERROR, error: error.message || 'Unexpected Error!!!' })
        )

}

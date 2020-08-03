import axios from "axios";
import * as helpers from '../../../common/helper';

export const LOAD_MOVIES_LOADING = 'LOAD_MOVIES_LOADING';
export const LOAD_MOVIES_SUCCESS = 'LOAD_MOVIES_SUCCESS';
export const LOAD_MOVIES_ERROR = 'LOAD_MOVIES_ERROR';
export const SEARCH_MOVIES_LOADING = 'SEARCH_MOVIES_LOADING';
export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';
export const SEARCH_MOVIES_ERROR = 'SEARCH_MOVIES_ERROR';
export const SORT_MOVIES_LOADING = 'SORT_MOVIES_LOADING';
export const SORT_MOVIES_SUCCESS = 'SORT_MOVIES_SUCCESS';

//Get All Movies
export const GetMovies = (page) => dispatch => {
    dispatch({ type: LOAD_MOVIES_LOADING });
    var query = "a"
    const fullUrl = helpers.createMovieDbUrl('/search/movie', {
        page,
        query
    });
    axios.get(fullUrl)
        .then(
            response => dispatch({ type: LOAD_MOVIES_SUCCESS, data: response.data }),
            error => dispatch({ type: LOAD_MOVIES_ERROR, error: error.message || 'Unexpected Error!!!' })
        )
}


//Search Movies
export const SearchMovies = (query) => dispatch => {
    dispatch({ type: SEARCH_MOVIES_LOADING });
    var page = 1
    const fullUrl = helpers.createMovieDbUrl('/search/movie', {
        page,
        query
    });
    axios.get(fullUrl)
        .then(
            response => dispatch({ type: SEARCH_MOVIES_SUCCESS, data: response.data }),
            error => dispatch({ type: SEARCH_MOVIES_ERROR, error: error.message || 'Unexpected Error!!!' })
        )
}

//sort movoes
export const SortMovies = (data, key) => dispatch => {
    dispatch({ type: SORT_MOVIES_LOADING });
    var movies = data.results
    if (key === "count") {
        movies.sort(function (a, b) {
            return (b.vote_count) - (a.vote_count);
        });
    }
    else {
        movies.sort(function (a, b) {
            return (b.popularity) - (a.popularity);
        });
    }
    data.results = movies
    dispatch({ type: SORT_MOVIES_SUCCESS, data })
}

        


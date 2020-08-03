import axios from "axios";
import * as helpers from '../../../common/helper';


export const MOVIE_DETAIL_VIEWING = 'MOVIE_DETAIL_VIEWING';
export const MOVIE_DETAIL_SUCCESS = 'MOVIE_DETAIL_SUCCESS';
export const MOVIE_DETAIL_ERROR = 'MOVIE_DETAIL_ERROR';


//Get Movie Details
export const getMovieDetails = (movieId) => dispatch => {
    dispatch({ type: MOVIE_DETAIL_VIEWING });
    const fullUrl = helpers.createMovieDbUrl(`/movie/${movieId}`, {
        
    });
    axios.get(fullUrl)
        .then(
            response => dispatch({ type: MOVIE_DETAIL_SUCCESS, data:response.data }),
            error => dispatch({ type: MOVIE_DETAIL_ERROR, error: error.message || 'Unexpected Error!!!' })
        )

}
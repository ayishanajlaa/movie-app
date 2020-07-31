import { combineReducers } from "redux";
import  movieListreducer from '../components/HomePage/modules/HomePageReducer'
import  movieDetailReducer from '../components/MovieDetailPage/modules/MovieDetailReducer'

export default combineReducers({
    movieListreducer ,
    movieDetailReducer
});

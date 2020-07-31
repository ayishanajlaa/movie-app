import React, { useState, useEffect } from 'react'
import Loader from 'react-loader';

import MovieCard from './HomePageCard'
import Pagination from './Pagination'
import { connect } from 'react-redux';
import { GetMovies } from "./modules/HomePageAction";
import './HomePage.css';


function HomepageLayout(props) {


  useEffect(() => {
    props.GetMovies(1)
  }, [])


  if (props.loading) {
    return <div className="loading"><h1>Loading</h1></div>
  }
  if (props.error) {
    return <div style={{ color: 'red' }}>ERROR: {props.error}</div>
  }

  return (
    <>
      <MovieCard movies={props.movies} />
      <Pagination/>
    </>
  );
}




const mapStateToProps = state => ({
  movies: state.movieListreducer.movies.results,
  loading: state.movieListreducer.loading,
  error: state.movieListreducer.error
});
const mapDispatchToProps = {
  GetMovies
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomepageLayout);
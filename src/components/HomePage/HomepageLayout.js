import React, {useEffect } from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import MovieCard from './HomePageCard'
import MovieSearch from './HomePageSearch'
import Pagination from './Pagination'
import { connect } from 'react-redux';
import { GetMovies, SortMovies } from "./modules/HomePageAction";
import './HomePage.css';

const HomepageLayout = (props) => {
 
  useEffect(() => {
    props.GetMovies(1)
  }, [])

  if (props.loading) {
    return <div className="loading"><h1>Loading</h1></div>
  }
  if (props.error) {
    return <div style={{ color: 'red' }}>ERROR: {props.error}</div>
  }

  //sort function
  const sort = (key) => {
    props.SortMovies(props.data,key)
  };


  return (
    <>
    <MovieSearch/>
    <div className="container">
      <div className="row justify-content-md-center my-3">
        <div className="col col-lg-2">
      <UncontrolledDropdown>
      <DropdownToggle caret>
        Sort By
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem  onClick={() => sort("count")}>Vote Count</DropdownItem>
        <DropdownItem  onClick={() => sort("popular")}>Popularity</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
        </div>
        <div className="col col-lg-2">
        <UncontrolledDropdown>
      <DropdownToggle caret>
        Filter By
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem  disabled>Vote Count</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
        </div>
      </div>
      <MovieCard movies={props.movies} />
      <Pagination />
    </div>
    </>

  );
}

const mapStateToProps = state => ({
  movies: state.movieListreducer.movies.results,
  data: state.movieListreducer.movies,
  loading: state.movieListreducer.loading,
  error: state.movieListreducer.error
});
const mapDispatchToProps = {
  GetMovies,
  SortMovies
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomepageLayout);
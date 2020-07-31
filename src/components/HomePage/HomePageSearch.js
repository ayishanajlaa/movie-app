
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { SearchMovies } from "./modules/HomePageAction";


const MovieSearch = (props) => {

  const [input, setInput] = useState('');

  const onChange = (e) => {
    setInput(e.currentTarget.value);
  };

  const search = () => {
    console.log(input)
    props.SearchMovies(input)
  };

  return (
    <div class="search-sec">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                <input type="text" class="form-control search-slt" placeholder="Enter Movie Name" onChange={onChange} />
              </div>
              <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                <button type="button" class="btn btn-danger wrn-btn" onClick={search}>Search</button>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-12 p-0">

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>



  );
}

const mapStateToProps = state => ({

});
const mapDispatchToProps = {
  SearchMovies
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieSearch);

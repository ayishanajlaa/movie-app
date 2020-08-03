
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SearchMovies } from "./modules/HomePageAction";

const MovieSearch = (props) => {

  const [input, setInput] = useState('');
  
const onChange = (e) => {
    setInput(e.currentTarget.value);
  };

  const search = () => {
    if (input.length > 0) {
      props.SearchMovies(input)
    }
  };

  return (
    <div className="search-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                <input type="text" className="form-control search-slt" placeholder="Enter Movie Name" onChange={onChange} />
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                <button type="button" className="btn btn-danger wrn-btn" onClick={search}>Search</button>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 p-0">
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

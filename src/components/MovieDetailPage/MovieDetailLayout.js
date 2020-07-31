import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetails } from "./modules/MovieDetailAction";
import './MovieDetail.css'
const TMDB_IMAGE_BASE_URL = (width = 300) => `https://image.tmdb.org/t/p/w${width}`;



class MovieDetailLayout extends React.Component {
  componentDidMount() {
    this.props.getMovieDetails(this.props.location.id);
  }

  render() {
    console.log(this.props.detail)
    const detail=this.props.detail

    if (this.props.loading) {
      return <div>Loading</div>
    }
    if (this.props.error) {
      return <div style={{ color: 'red' }}>ERROR: {this.props.error}</div>
    }

    return (
      <div class="container moviedetail">
      <div class="card">
        <div class="container-fliud">
          <div class="wrapper row">
            <div class="preview col-md-6">
              
              <div class="preview-pic tab-content">
                <div class="tab-pane active" id="pic-1"><img  src={TMDB_IMAGE_BASE_URL('300')+detail.poster_path}/></div>  
              </div>      
            </div>
            <div class="details col-md-6">
            <h3 class="product-title">{detail.title}</h3>
            <h6 class="product-title">{detail.tagline}</h6>
              <div class="rating">
                <div class="stars">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
                <span class="review-no">41 reviews</span>
              </div>
    <p class="product-description">{detail.overview}</p>
    <h6 class="price">Popularity: <span>{detail.popularity}</span></h6>
    <h6 class="price">vote Average: <span>{detail.vote_average}</span></h6>
    <h6 class="price">Vote Count: <span>{detail.vote_count}</span></h6>

    {/* <h4 class="price">Release: <span>{detail.release_date}</span></h4> */}

    <h6 class="price">Genres:</h6>
              <div class="row">
              {detail.genres?
              detail.genres.map((item) => <div class="col-6">{item.name}</div>):null}
              </div>
              <div class="action">
                <button class="add-to-cart btn btn-default" type="button">Book Ticket</button>
                <button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}


const mapStateToProps = state => ({
  detail: state.movieDetailReducer.detail,
  loading: state.movieDetailReducer.loading,
  error: state.movieDetailReducer.error
});
const mapDispatchToProps = {
  getMovieDetails
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetailLayout);

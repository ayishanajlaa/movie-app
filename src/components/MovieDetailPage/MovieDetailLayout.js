import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetails } from "./modules/MovieDetailAction";
import StarRatings from 'react-star-ratings';
import './MovieDetail.css'
const TMDB_IMAGE_BASE_URL = (width = 300) => `https://image.tmdb.org/t/p/w${width}`;

class MovieDetailLayout extends React.Component {

  componentDidMount() {
    if (this.props.location.id) {
      this.props.getMovieDetails(this.props.location.id);
    }
    else {
      this.props.history.push({
        pathname: '/',
      })
    }
  }

  render() {
    const detail = this.props.detail
    if (this.props.loading) {
      return <div>Loading</div>
    }
    if (this.props.error) {
      return <div style={{ color: 'red' }}>ERROR: {this.props.error}</div>
    }

    return (
      <div className="container moviedetail">
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">

                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1"><img src={TMDB_IMAGE_BASE_URL('300') + detail.poster_path} href="alt" /></div>
                </div>
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{detail.title}</h3>
                <h6 className="product-title">{detail.tagline}</h6>
                <div className="rating">
                  {detail.vote_average ?
                    <StarRatings
                      rating={parseInt(detail.vote_average)}
                      starRatedColor="blue"
                      numberOfStars={10}
                      name='rating'
                      starDimension="15px"
                      starSpacing="15px"
                    /> : null}

                </div>
                <p className="product-description">{detail.overview}</p>
                <h6 className="price">Popularity: <span>{detail.popularity}</span></h6>
                <h6 className="price">Vote Count: <span>{detail.vote_count}</span></h6>
                <h6 className="price">Release: <span>{detail.release_date}</span></h6>

                <h6 className="price">Genres:</h6>
                <div className="row">
                  {detail.genres ?
                    detail.genres.map((item) => <div key={item.id} className="col-6">{item.name}</div>) : null}
                </div>
                <div className="action">
                  <button className="add-to-cart btn btn-default" type="button">Book Ticket</button>
                  <button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
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

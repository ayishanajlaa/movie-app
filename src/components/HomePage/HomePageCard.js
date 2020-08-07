import React from 'react';
import { withRouter,Link } from "react-router-dom";
const TMDB_IMAGE_BASE_URL = (width = 300) => `https://image.tmdb.org/t/p/w${width}`;

const MovieCard = (props) => {

  return (
    <div className="container moviecard ">
    <div className="row ">
    {props.movies.map((item) =>
      <div className="col-12 col-sm-8 col-md-6 col-lg-4 d-flex align-items-stretch my-2" key={item.id}>
                 <div className="card bg-light">
            <img className="card-img-top" src={TMDB_IMAGE_BASE_URL('300')+item.poster_path} alt="Card  cap"/>
            <div className="card-body">
               <h5 className="card-title border-bottom">{item.title} </h5>
               <p className="price">Vote Count: <span>{item.vote_count}</span></p>
               <p className="price">Popularity: <span>{item.popularity}</span></p>
               <Link className="btn btn-sm btn-info "  to={{ pathname: '/MovieDetail', id: item.id }}>View more <i className="fas fa-angle-double-right"></i></Link>
            </div>
         </div>
      </div>
    )}
    </div>
    </div>
  
  );
}

export default withRouter(MovieCard)
import React from 'react';
import { withRouter } from "react-router-dom";
import {Row, Col} from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

const TMDB_IMAGE_BASE_URL = (width = 300) => `https://image.tmdb.org/t/p/w${width}`;

const MovieCard = (props) => {

  function viewMore(event) {
    props.history.push({
      pathname: '/MovieDetail',
      id: event.id 
    })
}
  return (
    <div className="container moviecard ">
    <div className="row ">
    {props.movies.map((item) =>
      <div className="col-12 col-sm-8 col-md-6 col-lg-4 d-flex align-items-stretch my-2" key={item.id}>
                 <div class="card bg-light">
            <img class="card-img-top" src={TMDB_IMAGE_BASE_URL('300')+item.poster_path} alt="Card image cap"/>
            <div class="card-body">
               <h5 class="card-title border-bottom">{item.title} </h5>
     <p class="card-text">{item.overview.substring(0, 150)}...</p>
               <a  class="btn btn-sm btn-info " onClick={() => viewMore(item)}>View more <i class="fas fa-angle-double-right"></i></a>
            </div>
         </div>
   
      </div>
    )}
  
    </div>
    </div>
  
  );
}

export default withRouter(MovieCard)
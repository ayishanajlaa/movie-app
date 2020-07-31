import React from 'react';
import { withRouter } from "react-router-dom";



const Header = (props) => {

  function redirect(){
    props.history.push({
      pathname: '/',
    })
  }

  return (
     <nav className="navbar navbar-dark fixed-top bg-custom-2">
  <div className="container">
    <a className="navbar-brand" onClick={() => redirect()}>JustWatch</a>
  </div>
</nav>

  );
}

export default withRouter(Header);

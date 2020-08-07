import React from 'react';
import { withRouter,Link } from "react-router-dom";

const Header = (props) => {
  return (
    <nav className="navbar navbar-dark fixed-top bg-custom-2">
      <div className="container">
      <Link className="navbar-brand" to={{ pathname: '/'}}>JustWatch </Link>
      </div>
    </nav>

  );
}

export default withRouter(Header);

import React, { Component } from "react";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { connect } from 'react-redux';
import { GetMovies } from "./modules/HomePageAction";

class HomepagePagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageno: 1
    };
  }

  nextPage = () => {
    if (this.props.movies.results && this.props.movies.page < this.props.movies.total_pages) {
      this.props.GetMovies(this.props.movies.page + 1)
    }
  }

  previousPage = () => {

    if (this.props.movies.results && this.props.movies.page !== 1) {
      this.setState({
      }, () => this.props.GetMovies(this.props.movies.page - 1))
    }
  }

  render() {
    return (
      <div className="row justify-content-md-center my-3">
        <div className="col col-lg-2">
          <Pagination >
            <PaginationItem>
              <PaginationLink onClick={this.previousPage} >previous</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={this.nextPage} >Next</PaginationLink>
            </PaginationItem>
          </Pagination>
        </div>
      </div>

    );

  }
}

const mapStateToProps = state => ({
  movies: state.movieListreducer.movies,
});
const mapDispatchToProps = {
  GetMovies
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomepagePagination);




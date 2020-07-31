import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch,BrowserRouter } from 'react-router-dom'
import store from './store'
import Header from './layout/header'
import HomePage from './components/HomePage/HomepageLayout'
import MovieDetailPage from './components/MovieDetailPage/MovieDetailLayout'
import MovieSearch from './components/HomePage/HomePageSearch'



import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <BrowserRouter>
      <Header />
        <MovieSearch />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/MovieDetail" component={MovieDetailPage} exact />
        </Switch>
        </BrowserRouter>


      </div>
    </Provider>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Grid, Segment } from 'semantic-ui-react';
import Slider from 'react-rangeslider'

import App from './components/app';
import SearchBar from './components/searchbar'
import Categories from './components/categories'


import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));


// ReactDOM.render(
//   <div>
//     <SearchBar />
//     <Categories />
//     <SearchButton />
//   </div>
//   , document.querySelector('.container'));




ReactDOM.render(
  <div>
    <SearchBar />
    <Categories />
    <div>
      <Slider
        min= {1}
        max= {100}
        value= {5}
        orientation = "vertical"
      />
    </div>
  </div>

  , document.querySelector('.container'));

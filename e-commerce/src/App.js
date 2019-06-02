import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Buypage from "./pages/Buypage/Buypage";
import Checkoutpage from './pages/Checkoutpage/Checkoutpage';
import "./App.css"


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={Buypage}/>
          <Route exact path="/checkout" component={Checkoutpage}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

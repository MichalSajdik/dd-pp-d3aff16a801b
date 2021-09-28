import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import ItemsProvided from "./components/ItemsProvided";
import ShoppingCart from "./components/ShoppingCart";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <Route path="/" exact component={ItemsProvided}/>
        <Route exact strict path="/shop_basket/" component={ShoppingCart}/>
      </div>
    </Router>
  );
}

export default App;

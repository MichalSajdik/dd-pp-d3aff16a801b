import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import ShoppingList from "./components/ShoppingList";
import ShopBasket from "./components/ShopBasket";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <Route path="/" exact component={ShoppingList}/>
        <Route exact strict path="/shop_basket/" component={ShopBasket}/>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/login/Login';
import Page404 from './pages/Page404';
import Category from './pages/Category';
import Cart from './pages/cart/Cart';
import './utils/utility-classes.css';
import Product from './pages/products/Product';
import TermsandConditions from './pages/TermsandConditions';
import Favorites from './pages/favorites/Favorites';

function App() {
  return(
    <div className="app">
      <Switch>
        <Route path="/login" component={Login}/>
        <Route exact path="/" component={Home}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/about" component={About}/>
        <Route path="/category/:categoryName" component={Category}/>
        <Route path="/product/:productId" component={Product}/>
        <Route path="/terms-and-conditions" component={TermsandConditions}/>
        <Route path='/favorites' component={Favorites}/>
        <Route path="*" component={Page404}/>
      </Switch>
    </div>
  );
}

export default App;

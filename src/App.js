import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import SearchRoute from './pages/SearchRoute';
import './App.css';

if(!localStorage.isAuthenticated){
	localStorage.clear();
}

const App = ()=>{
  return(
    <BrowserRouter>
      <div>
        <Route path="/" exact component={LoginPage}/>
        <SearchRoute exact path="/search" component={SearchPage}/>
      </div>  
    </BrowserRouter>
  )
}
export default App;

import React from 'react';
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const SearchRoute = ({component: Component, ...rest}) =>{
	return <Route {...rest} render={props=> (localStorage.isAuthenticated==="true") ? <Component {...props}  /> : <Redirect to="/" /> }/>
};


SearchRoute.propTypes = {
    component: PropTypes.func.isRequired
}

export default SearchRoute;
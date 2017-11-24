import React, { Component } from 'react';
import PropTypes from "prop-types";
import  user  from "../api";
import InlineError from "../messages/InlineError";

const ORGANISM_NAME = 'login';

export default class LoginPage extends Component {
	constructor(props){
		super(props);
		this.state={
			data:{
				username:"",
				password:""
			},
			loading: true,
			records:[],
			errors: {}
		}
		localStorage.clear();
	}
	handleChange = (e)=>{
		this.setState({
			data: {...this.state.data, [e.target.name]:e.target.value}
		});	
	}
	componentWillMount() {
	    user.user.login
	    .then((res)=>{
	    	this.setState({
	    		records: res.data.results,
	    		loading: false
	    	})	
	    })
	    .catch((error)=>{

	    });
	}
	handleSubmit =(e)=>{
		e.preventDefault();
		const errors = this.validate(this.state.data);
		const { records, data} = this.state;
		let isvalid = false;
		this.setState({errors});
		if(Object.keys(errors).length===0){
			this.setState({loading: "true"})
		}
		
		records.map((value,index)=>{
			if(data.username === value.name && data.password === value.birth_year){
				isvalid= true;
				return isvalid;
			}
		});
		if(isvalid){
			localStorage.isAuthenticated="true";
			this.props.history.push("/search");
		}else{
			if(data.username!==""){
				errors.username ="Invalid credentials";
			}
			this.setState({
				loading: false,
				errors
			});
		}
	}
	validate =(data)=>{
		const errors = {};
			//if(!Validator.isusername(data.username)) errors.username="Invalid username";
			if(!data.username) errors.username = "Can't be blank";
			if(!data.password) errors.password = "Can't be blank";
		return errors;
	}
	render() {
		const { data, errors, loading } = this.state;
		return (
			<section data-building-block="organism" className={`loginWrapper ${ORGANISM_NAME} ${loading?'loading':''}`}>
				<header className="App-header">
		          <h1 className="App-title">Login</h1>
		        </header>
        
				<form onSubmit={this.handleSubmit}>
			        <label htmlFor="password">Username:</label>
			          <input 
			          type="text" 
			          value={data.username} 
			          placeholder="Luke Skywalker"
			          name="username" 
			          onChange={this.handleChange} />
			       
			        {errors.username && <InlineError text={errors.username}/>}
			        <br/>
			        <label htmlFor="password">Password:</label>
			          <input 
			          type="password" 
			          id="password"
			          value={data.password} 
			          name="password" 
			          onChange={this.handleChange} />
			        {errors.password && <InlineError text={errors.password}/>}
			        <br/>
		        <input type="submit" value="Submit" />
		      </form>
			</section>
		);
	}
}
LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};


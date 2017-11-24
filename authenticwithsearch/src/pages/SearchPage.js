import React, { Component } from 'react';
import  user  from "../api";
import './../App.css';

const ORGANISM_NAME = 'search';

export default class SearchPage extends Component {
	constructor(props){
		super(props);
		this.state={
			searchText:'',
			planets:[],
			loading: true
		};
	}
	componentDidMount(){
		user.user.planets
		.then((res)=>{
			this.setState({
				planets: res.data.results,
				loading: false
			})
		})
		.catch((err)=>{
			console.log(err);
		});
	}
	handleChange = (e)=>{
		this.setState({
			searchText : e.target.value
		})
	}
	renderPlanets(){
		const { searchText, planets }= this.state;
		const sizeMap = new Map();
		const filteredPlanets = planets.filter((planet)=>{
			return planet.name.toLowerCase().indexOf(searchText.toLowerCase())!== -1
		});
		if(filteredPlanets){
			return filteredPlanets.map((value, idx)=>{
				return(
					<div className="planetWrapper" key={idx}>
						<div key={`name-${idx}`} style={{fontSize:((value.population/100000000000)+20)+"px"}}>Name: {value.name}</div>
						<div key={`count-${idx}`} style={{fontSize:((value.population/100000000000)+20)+"px"}}>  count:  {value.population}
						</div>
					</div>	
				)	
				
				})
				
			}
		
		return null;
	}
	render() {
		const { loading } = this.state;
		return (
			<section data-building-block="organism"  className={`searchWrapper ${ORGANISM_NAME}`} >
				<div className="headerOuter">
				<h1>Search</h1>
					<input type="text" value={this.state.searchText} name="search" onChange={this.handleChange} />
		        </div>
		        <div className={`planetsOuterWrapper ${loading?'loading':''}`}>
		        	{this.renderPlanets()}
		        </div>	
			</section>
		);
	}
}

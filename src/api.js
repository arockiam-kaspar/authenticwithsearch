import axios from "axios";

export default {
	user: {
		login : axios.get('https://swapi.co/api/people/'),
		planets: axios.get('https://swapi.co/api/planets/')
	}
}
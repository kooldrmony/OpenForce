import React from 'react';
import axios from 'axios';

class Quotes extends React.Component {

	state = {

		persons: [],

	};

	componentDidMount() {
		axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
			.then(function (response) {
				console.log(response)
			})
		// .then(res) => {
		// 	console.log(res);
		// 	this.setState({ persons : res.data });
		// })
	}

	render() {
		return (
				<ul>
					{this.state.persons.map(person => <li>{person.name}</li>)}
				</ul>
		)		
	}
}

export default Quotes;
/*This component pulls the Swanson Quotes from the “Ron Swanson Quotes API”
using Axios and generates the quote to the screen */

import React from 'react';
import axios from 'axios';

class Quotes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		}
	}

	// handleState() {
	// 	this.setState({ items: response.data[0] })
	// }

		componentDidMount() {

			axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
				.then(function (response) {
					console.log(response.data);
				})
				.catch(function (error) {
					console.log(error);
				})
		}



	render() {
		return (
				<ul>
					{this.state.items.map(item => (
						<li key={item.data}>{item.data}</li>
						))}
				</ul>
		)		
	}
};

export default Quotes;
/*This component pulls the Swanson Quotes from the “Ron Swanson Quotes API”
using Axios and generates the quote to the screen */

import React from 'react';
import axios from 'axios';

class Quotes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quotes: []
		}

		this.quoteGenerator = this.quoteGenerator.bind(this)
	}

		componentDidMount() {

			this.quoteGenerator();
		}

		quoteGenerator() {
				
				axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
					.then(function (response) {
						console.log(response.data);
	 				})
					.catch(function (error) {
						console.log(error);
					})
			};

/*Create a method to take the chosen quote and use the .split method to count the number of words
in the randomly selected quote to choose whether it is small, medium or large. */
	render() {
		return (
				<ul>
					{this.state.quotes.map(quote => (
						<li>{quote.data[0]}</li>
						))}
				</ul>
		)		
	}
};

export default Quotes;
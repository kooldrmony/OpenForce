import React from 'react';
import axios from 'axios';

class Quotes extends React.Component {

	state = {

		qoutes : []

	};

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/users')
		.then(res => {
			console.log(res);
			this.setState({ quotes : res.data });
		})
	}

	render() {
		return (
				<ul>
					{this.state.quotes.map(quote => <li>{quote.name}</li>)}
				</ul>,
		)		
	}
}

export default Quotes;
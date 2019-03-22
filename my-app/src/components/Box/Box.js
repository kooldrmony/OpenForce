import React, { Component } from 'react';
import "./Box.css";
import smallButton from "../smallButton";

class Box extends Component {
	constructor(props) {
		super(props);
		this.state = {
			small : false,
			medium : false, 
			large : false, 
		}
		// this.handleSmall = this.handleSmall.bind(this);
		// this.handleMedium = this.handleMedium.bind(this);
		// this.handleLarge = this.handleLarge.bind(this);
	}

	componentWillUpdate() {

		// handleSmall = () => {
		// 	this.setState({
		// 		small : true
		// 	});
		// }

		// handleMedium = () => {

		// }

		// handleLarge = () => {

		// }
	}


	render() {
		return (
			<div>
				<smallButton />
				<h3>
    				Choose between small, medium, or large Swanson words of Wisdom!
    			</h3>
    			<div id="container">

					<div>
						<button>
							Medium
						</button>
					</div>
					<div>
						<button>
							Large
						</button>
					</div>
				</div>
			</div>

			)
	}
}

export default Box;

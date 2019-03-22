import React, { Component } from "react";
import "./smallButton.css";

class smallButton extends Component {
	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		show : true
	// 	}

	// 	this.toggleDiv = this.toggleDiv.bind(this)
	// }

	// toggleDiv = () => {
	// 	const { show } = this.state;
	// 	this.setState({ show : true })
	// }
	
	render() {
		return (
			<div className="smallButton">
				<button id="smallButton">
				Small Quote
				</button>
			</div>
			)
	}
} 

export default smallButton;


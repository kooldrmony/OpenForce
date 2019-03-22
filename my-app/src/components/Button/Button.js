import React, { Component } from "react";
import "./Button.css";
import Box from '../Box';

class Button extends Component {
	constructor(props) {
		super(props)
		this.state = {
			show : false
		}

		this.toggleDiv = this.toggleDiv.bind(this)
	}

	toggleDiv = () => {
		this.setState({ show : true })
	}
	render() {
		return (
			<div className="Button">
				<button id="small" onClick={this.toggleDiv}>
					Click for Swanson's Words of Wisdom
				</button>
				<br />
				<br />
				{this.state.show && <Box />}
			</div>
			)
	}
} 


// = props => (
//   <div className="Button">
//   	<button id="small">
//   		Small
//   	</button>
//   	<br />
//   	<br />
//   	<button id="medium">
//   		Medium
//   	</button>
//   	<br />
//   	<br />
//   	<button id="large">
//   		Large
//   	</button>

//   </div>
// );

export default Button;

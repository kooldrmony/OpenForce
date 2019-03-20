import React, { Component } from "react";
import "./Button.css";
import Box from '../Box';

class Button extends Component {
	constructor(props) {
		super(props)
		this.state = {
			show : true
		}

		this.toggleDiv = this.toggleDiv.bind(this)
	}

	toggleDiv = () => {
		const { show } = this.state;
		this.setState({ show : !show })
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

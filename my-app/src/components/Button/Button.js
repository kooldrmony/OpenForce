import React from "react";
import "./Button.css";

class Button extends Component {
	constructor(props) {
		super(props)
		this.state = {
			show : true
		}

		this.toggleDiv = this.toggleDiv.bind(this)
	}

	
	render() {
		return (
			)
	}
} 


= props => (
  <div className="Button">
  	<button id="small">
  		Small
  	</button>
  	<br />
  	<br />
  	<button id="medium">
  		Medium
  	</button>
  	<br />
  	<br />
  	<button id="large">
  		Large
  	</button>

  </div>
);

export default Button;

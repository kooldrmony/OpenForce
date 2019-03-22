import React, { Component } from 'react';
import "./Box.css";
import Sbutton from "../Sbutton";
import MediumButton from "../MediumButton";
import LargeButton from "../LargeButton";

class Box extends Component {

	render() {
		return (
			<div>
				<h3>
    				Choose between small, medium, or large Swanson words of Wisdom!
    			</h3>
    			<div id="container">
    				<Sbutton />
    				<MediumButton />
    				<LargeButton />
      			</div>
			</div>

		)
	}
}

export default Box;

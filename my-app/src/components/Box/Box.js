import React, { Component } from 'react';
import "./Box.css";

class Box extends Component {
	render() {
		return (
			<div>
				<h3>
    				Choose between small, medium, or large Swanson words of Wisdom!
    			</h3>
    			<div id="container">
					<div>
						<button>
							Small
						</button>
					</div>
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

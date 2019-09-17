import React from 'react';

function Pt3() {
	return (
	<div className="pt3 container">
		<div id="title-container center">
			<h4 className="font-weight-bold">Find your ideal buddy, or join a team</h4>
			<h6 className="p-3 pb-5">Explore some of our favorite features to help you build your dream team</h6>
		</div>
	
		<div class="row">
			<div class="col-md-4">
				<img
					alt="feat1"
					src={require("./assets/landing_feature_1.png")} />
				<h4 className="mt-3 pt-3 text-left">
					Customized Matching
				</h4>
				<p className="mt-3 pt-3 text-left">
					Using your programming languages and interests, we give you a curated list of hackers that matches your preferences.
				</p>
			</div>

			<div class="col-md-4">
				<img
					alt="feat1"
					src={require("./assets/landing_feature_2.png")} />

				<h4 className="mt-3 pt-3 text-left">
					Browse hackers
				</h4>
				<p className="mt-3 pt-3 text-left">
					See what your fellow hackers are interested in, have experience with and wants to work on!
				</p>
			</div>

			<div class="col-md-4">
				<img
					alt="feat2"
					src={require("./assets/landing_feature_2.png")} />

				<h4 className="mt-3 pt-3 text-left">
					Join a Team
				</h4>
				<p className="mt-3 pt-3 text-left">
					Don't want to start a team? Join one! View their idea, goal and members profiles when you click going at a hackathon.
				</p>
			</div>
		</div>
	</div>
	
	);
}

export default Pt3;

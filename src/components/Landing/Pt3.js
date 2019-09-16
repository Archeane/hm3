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
					Any hackathon that you select will
					give you a list of hackers
					that most closely match your interests
					and skill level. Quick and simple! 
				</p>
			</div>

			<div class="col-md-4">
				<img
					alt="feat1"
					src={require("./assets/landing_feature_1.png")} />

				<h4 className="mt-3 pt-3 text-left">
					Browse hackers
				</h4>
				<p className="mt-3 pt-3 text-left">
					View skills and interests of your fellow hackers 
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
					Want to see a complete list of hackers?
					Our visualization gives you an intuitive view of 
					attendees, with the ability to filter them based on major, graduation year, and hackathon experience.
				</p>
			</div>
		</div>
	</div>
	
	);
}

export default Pt3;

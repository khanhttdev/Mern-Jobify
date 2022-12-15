import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

import main from "../assets/images/main.svg";

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>
			<div className="container page">
				{/* info */}
				<div className="info">
					<h1>
						job <span>tracking</span> app
					</h1>
					<p>
						I'm baby wayfarers hoodie next level teriyaki brooklyn cliche blue
						bottle single-origin coffee chia. Aesthetic post-ironic venom,
						quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
						narwhal.
					</p>
					<div className="btn btn-hero">Login/Register</div>
				</div>
				<img src={main} alt="job hunt" className="img main-img" />
			</div>
		</Wrapper>
	);
};

export default Landing;

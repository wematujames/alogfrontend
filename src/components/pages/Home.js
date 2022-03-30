import React from "react";
import InfoSection from "../layout/InfoSection";
import MainContent from "../layout/MainContent";

//Components
import ProfileSection from "../layout/ProfileSection";

function Home() {
	return (
		<div className="container row">
			<ProfileSection />
			<MainContent />
			<InfoSection />
		</div>
	);
}

export default Home;

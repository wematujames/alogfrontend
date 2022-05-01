import React from "react";
import { Grid, GridItem, Container } from "@chakra-ui/react";
import Posts from "../posts/Posts";
//Components
import Others from "../layout/Others";
import User from "../layout/User";

function Home() {
	return (
		<Grid templateColumns='repeat(8, 1fr)' gap={4}>
			{/* Current user conscise profile / info */}
			<GridItem display={["none", "none", "flex"]} colSpan={2} px={3}>
				<User />
			</GridItem>
			{/* Main => Posts */}
			<GridItem gridArea={3} colSpan={[8, 8, 4]} px={3}>
				<Posts />
			</GridItem>
			{/* This like recommendations / info / news etc */}
			<GridItem display={["none", "none", "flex"]} colSpan={2} px={3}>
				<Others />
			</GridItem>
		</Grid>
	);
}

export default Home;

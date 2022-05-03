import React from "react";
import { Flex, Grid, GridItem } from "@chakra-ui/react";

import Posts from "../posts/Posts";
import Others from "../layout/Others";
import User from "../User/User";
import UserActivities from "../User/UserActivities";
import UserActions from "../User/UserActions";
// import UserAccount from "../User/UserAccount";

function Home() {
	return (
		<Grid templateColumns='repeat(8, 1fr)' gap={2}>
			{/* Current user conscise profile / info / activity */}
			<GridItem
				display={["none", "none", "block"]}
				colSpan={2}
				px={3}
				width='100%'>
				<Flex flexDir='column'>
					<User />
					<UserActions />
				</Flex>
			</GridItem>

			{/* Main => Posts */}
			<GridItem gridArea={3} colSpan={[8, 8, 4]} px={3}>
				<Posts />
			</GridItem>

			{/* This like recommendations / info / news etc */}
			<GridItem display={["none", "none", "grid"]} colSpan={2} px={3}>
				<Others />
			</GridItem>
		</Grid>
	);
}

export default Home;

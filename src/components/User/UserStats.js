import React from "react";
import { Grid, GridItem, Divider } from "@chakra-ui/react";

//components
import UserStatItem from "./UserStatItem";

function UserStats({ user: { likes, followers, comments, posts } }) {
	return (
		<Grid
			templateColumns='repeat(3, 1fr)'
			justifyItems='center'
			minWidth='100%'
			textAlign='center'>
			<GridItem>
				<UserStatItem label='Posts' value={posts} />
			</GridItem>
			<Divider orientation='vertical' />
			<GridItem>
				<UserStatItem label='Likes' value={likes} />
			</GridItem>
			<GridItem>
				<UserStatItem label='Comments' value={comments} />
			</GridItem>
			<Divider orientation='vertical' />
			<GridItem>
				<UserStatItem label='Followers' value={followers} />
			</GridItem>
		</Grid>
	);
}

export default UserStats;

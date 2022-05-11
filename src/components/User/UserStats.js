import React from "react";
import { Grid, GridItem, Divider } from "@chakra-ui/react";
import PropTypes from 'prop-types'

import useAuth from "../../hooks/useAuth";

//components
import UserStatItem from "./UserStatItem";

function UserStats() {
	
	const { user: { stats: { likes, followers, comments, posts } } } = useAuth()
	
	return (
		<Grid
			templateColumns='repeat(3, 1fr)'
			justifyItems='center'
			minWidth='100%'
			textAlign='center'>
			<GridItem>
				<UserStatItem label='Posts' count={posts} />
			</GridItem>
			<Divider orientation='vertical' />
			<GridItem>
				<UserStatItem label='Likes' count={likes} />
			</GridItem>
			<GridItem>
				<UserStatItem label='Comments' count={comments} />
			</GridItem>
			<Divider orientation='vertical' />
			<GridItem>
				<UserStatItem label='Followers' count={followers} />
			</GridItem>
		</Grid>
	);
}

UserStats.propTypes = {
	user: PropTypes.object.isRequired
};

UserStats.defaultProps = {
	user: {
		fName: "User",
		lName: "Name",
		posts: 110,
		likes: 2500,
		comments: 2562,
		followers: 25478
	}
};


export default UserStats;

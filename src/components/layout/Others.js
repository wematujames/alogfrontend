import React from "react";
import PropTypes from "prop-types";
import { Grid, GridItem, Text, Flex } from "@chakra-ui/react";
function Miscellaneous({ recentEvents: { type, title, username, date } }) {
	return (
		<Flex
			shadow='md'
			justifyContent='center'
			borderRadius={5}
			bg='gray.50'
			minHeight='20rem'
			width='100%'>
			<Text fontWeight='bold'>Recent Events</Text>
			<Grid>
				<GridItem>{type}</GridItem>
				<GridItem>
					<Grid>
						<GridItem></GridItem>
						<GridItem></GridItem>
						<GridItem></GridItem>
					</Grid>
				</GridItem>
			</Grid>
		</Flex>
	);
}

//User liked your post
//User commented on your post
//User started following you
//You started folling User

Miscellaneous.propTypes = {
	// user: PropTypes.object.isRequired,
	recentEvents: PropTypes.array
};

Miscellaneous.defaultProps = {
	recentEvents: [
		{
			user: "User",
			type: "post",
			title: "Post Title",
			date: "2020-01-01"
		}
	]
};
export default Miscellaneous;

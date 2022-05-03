import { Flex, Divider } from "@chakra-ui/react";
import React from "react";
import PropTypes from "prop-types";

//Sub Components
import UserStats from "./UserStats";
import UserId from "./UserProfile";

function User({ user, ...rest }) {
	return (
		<>
			{" "}
			<Flex
				shadow='md'
				borderRadius='md'
				bg='gray.50'
				alignItems='center'
				p={3}
				flexDirection='column'
				width='100%'
				height='fit-content'
				{...rest}>
				{/* User img/avatar */}
				<UserId user={user} />
				<Divider my={2} />
				{/* User stats */}
				<UserStats user={user} />
			</Flex>
		</>
	);
}

User.propTypes = {
	user: PropTypes.object.isRequired
};

User.defaultProps = {
	user: {
		fName: "User",
		lName: "Name",
		posts: 110,
		likes: 2500,
		comments: 2562,
		followers: 25478
	}
};

export default User;

import React from "react";
import { Text, Flex, Box } from "@chakra-ui/react";
import PropTypes from "prop-types";

function UserActivitiesItem({ activity, ...rest }) {
	const { user, type, object, date } = activity;

	const typeIcons = {
		post: "📝",
		comment: "💬",
		follow: "👤",
		like: "👍",
		repost: "🔁",
		mention: "🔖"
	};

	const typeTemplates = {
		like: "liked your post,",
		comment: "commented on your post,",
		follow: "started following ",
		post: "created a new post,"
	};

	const text = `${user} ${typeTemplates[type]} ${object}`;
	const toDisplay = text.length > 20 ? text.slice(0, 20) + "..." : text;

	return (
		<Flex flexDir='column'>
			<Flex px={2} py={2} bg='app.bgray' borderRadius='md' shadow='md'>
				<Box marginRight={2} my='auto'>
					{typeIcons[type]}
				</Box>
				<Flex flexDir='column'>
					<Text>{toDisplay}</Text>
				</Flex>
			</Flex>
			<Text alignSelf='flex-end' fontSize='sm' color='orange.500'>
				{date}
			</Text>
		</Flex>
	);
}

UserActivitiesItem.propTypes = {
	activity: PropTypes.object.isRequired
};

export default UserActivitiesItem;

//User liked your post
//User commented on your post
//User started following you
//You started folling User

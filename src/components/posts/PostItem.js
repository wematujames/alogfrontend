import React from "react";
import {
	Heading,
	Text,
	Divider,
	Grid,
	Flex,
	Button
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { LockIcon } from "@chakra-ui/icons";

import useAuth from "../../hooks/useAuth";

function PostItem({ post, ...rest }) {

	const { user } = useAuth();
	
	const { title, body, likes, comments, createdAt, author } = post;

	const edit = (
		<Text
			position="absolute"
			right={3}
			zIndex={1000}
			my={5}
			value='Login'
			leftIcon={<LockIcon />}>
			Edit
		</Text>
	)

	return (
		<Grid
			position="relative"
			flexDirection='column'
			px={5}
			py={3}
			shadow='md'
			bg='#fff'
			borderRadius={5}
			borderWidth='1px'
			{...rest}>
			<Flex justifyContent="space-between" alignItems="center"  >
				<Text fontSize='lg' fontWeight="bold" my={0}>
				{title}
				</Text>
				{user.id !== author && edit}
			</Flex>
			<Flex flexDir='column'>
				<Text mt={4}>{body}</Text>
				<Text fontSize='sm' color='orange.500' alignSelf='flex-end'>
					{createdAt}
				</Text>
			</Flex>
			{/* <Divider /> */}
			<Flex>
				<Text marginRight={3}>{likes} 👍</Text>
				<Text>{comments || 0} 💬</Text>
			</Flex>
			<Divider my={1} />
			<Flex>
				<Text marginRight={3}>Like</Text>
				<Text>{comments} Comment</Text>
			</Flex>
		</Grid>
	);
}

PostItem.propTypes = { post: PropTypes.object.isRequired };
PostItem.defaultProps = {
	post: {
		title: "example post title",
		body: "example description",
		comments: 0,
		likes: 0,
		createdAt: "2020-01-01"
	}
};
export default PostItem;

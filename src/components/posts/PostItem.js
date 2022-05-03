import React from "react";
import {
	Box,
	Heading,
	Text,
	Divider,
	Grid,
	GridItem,
	Flex
} from "@chakra-ui/react";
import PropTypes from "prop-types";

function PostItem({ post, ...rest }) {
	const { title, body, likes, comments, createdAt } = post;

	return (
		<Grid
			flexDirection='column'
			p={5}
			shadow='md'
			bg='#fff'
			borderRadius={5}
			borderWidth='1px'
			{...rest}>
			<Heading fontSize='lg'>{title}</Heading>
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

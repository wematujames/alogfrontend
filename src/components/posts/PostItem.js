import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

function PostItem({ post, ...rest }) {
	const { title, body } = post;

	return (
		<Box
			p={5}
			shadow='md'
			bg='#fff'
			borderRadius={5}
			borderWidth='1px'
			{...rest}>
			<Heading fontSize='xl'>{title}</Heading>
			<Text mt={4}>{body}</Text>
		</Box>
	);
}

PostItem.propTypes = { post: PropTypes.object.isRequired };
PostItem.defaultProps = {
	post: {
		title: "example post title",
		body: "example description"
	}
};
export default PostItem;

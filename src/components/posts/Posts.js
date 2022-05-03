import React, { useContext, useEffect } from "react";
import { VStack } from "@chakra-ui/react";

//context
import PostContext from "../../context/posts/PostsContext";

//Components
import PostItem from "./PostItem";

function Post() {
	const postsContext = useContext(PostContext);
	const { posts, getPosts } = postsContext;

	//Fetch posts of initial page load
	useEffect(() => {
		getPosts();
	});

	return (
		<VStack spacing={3}>
			{posts.map(post => (
				<PostItem key={post.id} post={post} />
			))}
		</VStack>
	);
}

export default Post;

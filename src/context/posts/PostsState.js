import axios from "axios";
import { useReducer } from "react";
import {
	CREATE_POST,
	GET_POSTS,
	GET_POST,
	GET_USER_POSTS,
	UPDATE_POST,
	DELETE_POST,
	FETCH_ERROR
} from "../types";

//Local
import PostsContext from "./PostsContext";
import PostsReducer from "./PostsReducer";

const PostsState = props => {
	const initialState = {
		posts: [],
		post: {},
		error: null
	};

	const [state, dispatch] = useReducer(PostsReducer, initialState);

	//Create post
	const createPost = async postData => {
		try {
			const res = await axios.get("/posts", { body: postData });
			dispatch({ type: CREATE_POST, payload: res.data.data });
		} catch (err) {
			dispatch({ type: FETCH_ERROR, payload: err.response.data.msg });
		}
	};

	//Create post
	const getPosts = async () => {
		try {
			const res = await axios.get("/posts");
			dispatch({ type: GET_POSTS, payload: res.data.data });
		} catch (err) {
			dispatch({ type: FETCH_ERROR, payload: err.response.data.msg });
		}
	};

	//Create post
	const getUserPosts = async id => {
		try {
			const res = await axios.put(`/posts/${id}`);
			dispatch({ type: GET_USER_POSTS, payload: res.data.data });
		} catch (err) {
			dispatch({ type: FETCH_ERROR, payload: err.response.data.msg });
		}
	};

	//Create post
	const getPost = async id => {
		try {
			const res = await axios.get(`/posts/${id}`);
			dispatch({ type: GET_POST, payload: res.data.data });
		} catch (err) {
			dispatch({ type: FETCH_ERROR, payload: err.response.data.msg });
		}
	};

	//Create post
	const updatePost = async id => {
		try {
			const res = await axios.put(`/posts/${id}`);
			dispatch({ type: UPDATE_POST, payload: res.data.data });
		} catch (err) {
			dispatch({ type: FETCH_ERROR, payload: err.response.data.msg });
		}
	};

	//Create post
	const deletePost = async id => {
		try {
			const res = await axios.delete(`/posts/${id}`);
			dispatch({ type: DELETE_POST, payload: res.data.data });
		} catch (err) {
			dispatch({ type: FETCH_ERROR, payload: err.response.data.msg });
		}
	};

	return (
		<PostsContext.Provider
			value={{
				posts: state.posts,
				post: state.post,
				error: state.error,
				getPosts,
				getPost,
				getUserPosts,
				createPost,
				updatePost,
				deletePost
			}}>
			{props.children}
		</PostsContext.Provider>
	);
};

export default PostsState;

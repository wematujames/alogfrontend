import React from "react";
import { Grid, Avatar, Text } from "@chakra-ui/react";

// Context
import useAuth from "../../hooks/useAuth";

function User() {
	const {user: {fName, lName}} = useAuth()

	return (
		<Grid justifyItems='center'>
			<Avatar size='lg' name='Dan Abrahmov' />
			<Text fontSize='lg' fontWeight='bold' my={1}>
				{`${fName} ${lName}`}
			</Text>
		</Grid>
	);
}

export default User;

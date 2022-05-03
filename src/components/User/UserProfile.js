import React from "react";
import { Grid, Avatar, Text } from "@chakra-ui/react";

function User({ user: { fName, lName } }) {
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

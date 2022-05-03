import React from "react";
import { Accordion, Grid } from "@chakra-ui/react";

import UserActivities from "./UserActivities";
import UserAccount from "./UserAccount";

function UserActions({ activities }) {
	return (
		<Grid>
			<Accordion>
				<UserActivities />
				<UserAccount />
			</Accordion>
		</Grid>
	);
}

export default UserActions;

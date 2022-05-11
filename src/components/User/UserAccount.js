import React from "react";
import PropTypes from "prop-types";
import { Heading, Grid, GridItem } from "@chakra-ui/react";
import {
	Accordion,
	AccordionButton,
	Box,
	AccordionIcon,
	AccordionItem,
	AccordionPanel
} from "@chakra-ui/react";

import UserActivitiesItem from "./UserActivitiesItem";

function UserActivities({ activities }) {
	return (
		<AccordionItem>
			<h2>
				<AccordionButton px={0}>
					<Box flex='1' textAlign='left' fontWeight='bold'>
						Account
					</Box>
					<AccordionIcon />
				</AccordionButton>
			</h2>
			<AccordionPanel pb={4} px={0}>
				<GridItem py={1}>
					Settings
				</GridItem>
			</AccordionPanel>
		</AccordionItem>
	);
}

UserActivities.propTypes = {
	activities: PropTypes.array
};

UserActivities.defaultProps = {
	activities: [
		{
			id: 1,
			user: "User",
			type: "comment",
			title: "Post Title",
			object: "James",
			date: "May, 20. 8:00"
		},
		{
			id: 2,
			user: "User",
			type: "post",
			title: "Post Title",
			object: "James",
			date: "May, 20. 8:00"
		},
		{
			id: 3,
			user: "User",
			type: "like",
			title: "Post Title",
			object: "James",
			date: "May, 20. 8:00"
		}
	]
};

export default UserActivities;

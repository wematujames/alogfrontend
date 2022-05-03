import React from "react";
import PropTypes from "prop-types";
import { Text, Heading } from "@chakra-ui/react";

function UserStatItem({ label, value, ...rest }) {
	return (
		<>
			<Heading fontSize='lg' {...rest}>
				{value}
			</Heading>
			<Text>{label}</Text>
		</>
	);
}

UserStatItem.defaultProps = {
	label: "label",
	value: 0
};
UserStatItem.propsTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};

export default UserStatItem;

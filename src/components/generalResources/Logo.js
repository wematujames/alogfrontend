import React from "react";
import PropTypes from "prop-types";

import { Box, Text } from "@chakra-ui/react";

export default function Logo({ logo, ...rest }) {
	return (
		<Box {...rest}>
			<Text fontSize='lg' fontWeight='bold'>
				{logo}
			</Text>
		</Box>
	);
}

Logo.propsTypes = {
	logo: PropTypes.string.isRequired
};
Logo.defaultProps = {
	logo: "Logo"
};

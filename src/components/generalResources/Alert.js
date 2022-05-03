import React from "react";
import PropTypes from "prop-types";

import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Text, Flex } from "@chakra-ui/react";

function Alert({ alert }) {
	return (
		<Flex alignItems='center' justifyContent={"center"}>
			<InfoOutlineIcon color='red.500' size='20px' mr='0.5rem' />
			<Text fontSize='sm' color='red.500'>
				{alert}
			</Text>
		</Flex>
	);
}

Alert.propTypes = {
	alert: PropTypes.string.isRequired
};

Alert.defaultProps = {
	alert: ""
};

export default Alert;

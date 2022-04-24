import React from "react";
import PropTypes from "prop-types";
import { Link as routerLink } from "react-router-dom";
import { Link, Text } from "@chakra-ui/react";

const LinkItem = ({ label, to = "/", ...rest }) => {
	return (
		<Link to={to} as={routerLink}>
			<Text {...rest}>{label}</Text>
		</Link>
	);
};

LinkItem.defaultProps = {
	label: "link",
	to: "#!"
};

LinkItem.propTypes = {
	label: PropTypes.string,
	to: PropTypes.string
};

export default LinkItem;

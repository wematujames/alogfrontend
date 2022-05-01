import React from "react";

import { Box } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaMarker } from "react-icons/fa";

const MenuToggle = ({ toggle, isOpen }) => {
	return (
		<Box display={{ base: "block", md: "none" }} onClick={toggle}>
			{isOpen ? <FaMarker /> : <HamburgerIcon />}
		</Box>
	);
};

export default MenuToggle;

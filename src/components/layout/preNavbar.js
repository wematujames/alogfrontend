import React from "react";
import { Flex } from "@chakra-ui/react";

import MenuToggle from "../resources/MenuToggle";
import NavbarContainer from "../resources/NavbarContainer";
import Logo from "../resources/Logo";
import MenuLinks from "../resources/MenuLink";

const NavBar = props => {
	const [isOpen, setIsOpen] = React.useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<NavbarContainer {...props}>
			<Logo
				w='100px'
				color={["white", "white", "primary.500", "primary.500"]}
			/>
			<MenuToggle toggle={toggle} isOpen={isOpen} />
			<MenuLinks isOpen={isOpen} />
		</NavbarContainer>
	);
};

export default NavBar;

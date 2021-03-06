import React, { useState } from "react";
import {
	Flex,
	Avatar,
	Box,
	HStack,
	VStack,
	IconButton
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import LinkItem from "../generalResources/LinkItem";
import Logo from "../generalResources/Logo";
import useAuth from "../../hooks/useAuth";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const { logout } = useAuth();

	return (
		<Box background='primary.50' mb='1rem' shadow='md'>
			<Flex
				mx='auto'
				width={["95%", "90%", "85%"]}
				maxW='1200px'
				justify={["center", "center", "space-between"]}
				alignItems='center'
				px='1rem'
				py='0.4rem'>
				<IconButton
					as={isOpen ? CloseIcon : HamburgerIcon}
					size='xsm'
					display={["inline", "inline", "none"]}
					mr='auto'
					background='transparent'
					onClick={() => setIsOpen(!isOpen)}
				/>
				<Logo flex='1' textAlign={["center", "center", "left"]} />
				<HStack spacing={5} display={["none", "none", "flex"]}>
					<LinkItem label='Home' to='/' />
					<LinkItem label='About' to='/about' />
					<LinkItem label='Contact' to='/contact' />
					<Avatar size='sm' name='Dan Abrahmov' />
					<LinkItem to='#!' label='Logout' onClick={logout} />
				</HStack>
			</Flex>
			<Flex display={[isOpen ? "flex" : "none"]} flexDirection='column'>
				<VStack spacing={5}>
					<LinkItem label='Home' to='/' />
					<LinkItem label='About' to='/about' />
					<LinkItem label='Contact' to='/contact' />
					<LinkItem to='#!' label='Logout' onClick={logout} />
				</VStack>
			</Flex>
		</Box>
	);
}
export default Navbar;

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
import LinkItem from "../resources/LinkItem";
import Logo from "../resources/Logo";
import useAuth from "../../hooks/useAuth";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const { logout } = useAuth();

	return (
		<Box background='rgba(255,255,255,0.6)'>
			<Box width={["100%", "100%", "70%"]} mx='auto'>
				<Flex
					justify={["center", "center", "space-between"]}
					alignItems='center'
					px='1rem'
					py='0.4rem'>
					<IconButton
						as={HamburgerIcon}
						size='sm'
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
						<Avatar
							size='md'
							name='Dan Abrahmov'
							// src='https://bit.ly/dan-abramov'
						/>
						<LinkItem to='#!' label='Logout' onClick={logout} />
					</HStack>
				</Flex>
				<Flex
					display={[isOpen ? "flex" : "none"]}
					flexDirection='column'>
					<VStack spacing={5}>
						<LinkItem label='Home' to='/' />
						<LinkItem label='About' to='/about' />
						<LinkItem label='Contact' to='/contact' />
						<LinkItem to='#!' label='Logout' onClick={logout} />
					</VStack>
				</Flex>
			</Box>
		</Box>
	);
}
export default Navbar;

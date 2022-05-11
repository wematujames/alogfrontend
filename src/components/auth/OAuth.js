import React from 'react'
import {Flex, Button} from '@chakra-ui/react'
import { FaFacebook, FaGoogle } from "react-icons/fa";


function OAuth() {

    //Handle google oauth
	const handleGoogleAuth = e => {
		e.preventDefault();
	};

	//Handle facebook oauth
	const handleFacebookAuth = e => {
		e.preventDefault();
	};
  return (
    <Flex justifyContent='space-between'>
					<Button
						colorScheme='brown'
						onClick={handleFacebookAuth}
						leftIcon={<FaFacebook />}
						fontSize={"0.8rem"}
						variant={"outline"}
						my={1}
						type='submit'
						value='Login'>
						Signup with FaceBook
					</Button>
					<Button
						onClick={handleGoogleAuth}
						leftIcon={<FaGoogle />}
						fontSize={"0.8rem"}
						variant={"outline"}
						my={1}
						type='submit'
						value='Login'>
						Signup with Google
					</Button>
				</Flex>
  )
}

export default OAuth
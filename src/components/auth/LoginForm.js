import { useEffect, useState } from "react";
import { Input, Flex, Heading, Button, Box } from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";
import { FaFacebook, FaGoogle } from "react-icons/fa";

//Hooks
import useAuth from "../../hooks/useAuth";
import useAlert from "../../hooks/useAlert";

//Components
import Alert from "../generalResources/Alert";

function LoginForm() {
	//Context
	const authContext = useAuth();
	const { logIn, error, clearErrors } = authContext;
	const alertContext = useAlert();
	const { setAlert, alert } = alertContext;

	//Form State
	const [fData, setFData] = useState({
		email: "",
		password: ""
	});

	//Event handlers
	const handleChange = e => {
		setFData({ ...fData, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!fData.email || !fData.password) {
			setAlert("Please enter all fields", "danger");
		} else {
			logIn(fData);
			setFData({ email: "", password: "" });
		}
	};

	//Handle google oauth
	const handleGoogleAuth = e => {
		e.preventDefault();
	};

	//Handle facebook oauth
	const handleFacebookAuth = e => {
		e.preventDefault();
	};

	//Handle after effects
	useEffect(() => {
		if (error) {
			setAlert(error);
			clearErrors();
		}
		//eslint-disable-next-line
	}, [error]);

	return (
		<Flex
			alignItems='center'
			px={"5rem"}
			justifyContent='center'
			minH='100vh'>
			<Flex
				backgroundColor='#fff'
				px='1rem'
				py='2rem'
				borderRadius={10}
				flexDir='column'>
				<Heading
					fontSize='2xl'
					fontWeight='bold'
					textAlign='center'
					mb='0.5rem'>
					Login
				</Heading>
				{alert && <Alert alert={alert} />}
				<form onSubmit={handleSubmit}>
					<Box my={5}>
						<Input
							placeholder='Username or email'
							value={fData.email}
							onChange={handleChange}
							type='email'
							name='email'
							id='email'
						/>
					</Box>
					<Box>
						<Input
							placeholder='Password'
							value={fData.password}
							onChange={handleChange}
							type='password'
							name='password'
							id='password'
						/>
					</Box>
					<Button
						my={5}
						value='Login'
						leftIcon={<LockIcon />}
						type='submit'>
						Login
					</Button>
				</form>
				<Flex justifyContent='space-between'>
					<Button
						onClick={handleFacebookAuth}
						leftIcon={<FaFacebook />}
						fontSize={"0.8rem"}
						variant={"outline"}
						my={1}
						type='submit'
						value='Login'>
						Login with FaceBook
					</Button>
					<Button
						onClick={handleGoogleAuth}
						leftIcon={<FaGoogle />}
						fontSize={"0.8rem"}
						variant={"outline"}
						my={1}
						type='submit'
						value='Login'>
						Login with Google
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
}

export default LoginForm;

import { useEffect, useState } from "react";
import { Input, Flex, Heading, Button, Box } from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";

//Hooks
import useAuth from "../../hooks/useAuth";
import useAlert from "../../hooks/useAlert";

//Components
import Alert from "../generalResources/Alert";
import OAuth from "./OAuth";

function RegisterForm() {
	//Context
	const authContext = useAuth();
	const { register, error, clearErrors } = authContext;
	const alertContext = useAlert();
	const { setAlert, alert } = alertContext;

	//Form State
	const [fData, setFData] = useState({
        fName: "",
        lName: "",
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
			setAlert("Please complete all fields", "danger");
		} else {
			register(fData);
			setFData({ fName: "", lName: "", email: "", password: "" });
		}
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
							placeholder='First Name'
							value={fData.fName}
							onChange={handleChange}
							type='text'
							name='fName'
						/>
					</Box>
					<Box my={5}>
						<Input
							placeholder='Last Name'
							value={fData.lName}
							onChange={handleChange}
							type='text'
							name='lName'
						/>
					</Box>
					<Box my={5}>
						<Input
							placeholder='Username or email'
							value={fData.email}
							onChange={handleChange}
							type='email'
							name='email'
						/>
					</Box>
					<Box>
						<Input
							placeholder='Password'
							value={fData.password}
							onChange={handleChange}
							type='password'
							name='password'
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
				<OAuth/>
			</Flex>
		</Flex>
	);
}

export default RegisterForm;

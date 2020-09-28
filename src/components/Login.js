import React, {useState} from 'react';
import { Grid, TextField, Button, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Heading from '../utils/Heading';
import image from '../images/home/shop-ad.png';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '40ch',
			fontSize: '14px'
			// padding: '16px'
		},
		'& input': {
			padding: '15px 12px'
		}
	},
	

}));

function Login() {
	const classes = useStyles();
	
	const [loginDetails, setLoginDetails] = useState({username: '', password: ''});
	const [registerDetails, setRegisterDetails] = useState({username: '', email: '', password: ''});

	const usernameChangeHandler = (e) => {
		const loginObj = {...loginDetails}
		const newUsername = e.target.value
		loginObj.username = newUsername
		console.log(loginDetails)
		setLoginDetails(loginObj) 
	}

	const passwordChangeHandler = (e) => {
		const loginObj = {...loginDetails}
		const newPassword = e.target.value
		loginObj.password = newPassword
		console.log(loginDetails)
		setLoginDetails(loginObj) 
	}

	const registerUsernameChangeHandler = (e) => {
		const regObj = {...registerDetails}
		const newUsername = e.target.value
		regObj.username = newUsername
		// console.log(registerDetails)
		setRegisterDetails(regObj) 
	}

	const registerPasswordChangeHandler = (e) => {
		const regObj = {...registerDetails}
		const newPassword = e.target.value
		regObj.password = newPassword
		// console.log(registerDetails)
		setRegisterDetails(regObj) 
	}

	const registerEmailChangeHandler = (e) => {
		const regObj = {...registerDetails}
		const newEmail = e.target.value
		regObj.email = newEmail
		// console.log(registerDetails)
		setRegisterDetails(regObj) 
	}

	const regUser = async () => {
		await fetch('https://testecmr.herokuapp.com/users/register/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			  },
			body: JSON.stringify(registerDetails)
		})
			.then(response => response.json())
			.then(data => console.log(data))
	}

	const loginUser = async () => {
		await fetch('https://testecmr.herokuapp.com/users/login/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			  },
			body: JSON.stringify(loginDetails)
		})
			.then(response => response.json())
			.then(data => console.log(data))
	}

	return (
		<Grid item container justify="center">
			<Grid item md={3}>
				<Heading title="Login" />
				<form className={classes.root} noValidate autoComplete="off">
					<TextField id="outlined-basic" label="Username" variant="outlined" value={loginDetails.username} onChange={usernameChangeHandler} />
					<TextField id="outlined-basic" label="Password" variant="outlined" value={loginDetails.password} onChange={passwordChangeHandler} />
					<Button variant="contained" color="primary" onClick={loginUser}>
					  <Box py={0.7}><Typography variant="body1" color="secondary">LOGIN</Typography></Box>
					</Button>
				</form>

				<Box py={0.7}><Typography variant="body1" color="secondary">LOGIN</Typography></Box>


				<form className={classes.root} noValidate autoComplete="off">
					<TextField id="outlined-basic" label="Username" variant="outlined" value={registerDetails.username} onChange={registerUsernameChangeHandler} />
					<TextField id="outlined-basic" label="Email" variant="outlined" value={registerDetails.email} onChange={registerEmailChangeHandler} />
					<TextField id="outlined-basic" label="Password" variant="outlined" value={registerDetails.password} onChange={registerPasswordChangeHandler} />
					<Button variant="contained" color="primary" onClick={regUser}>
					  <Box py={0.7}><Typography variant="body1" color="secondary">REGISTER</Typography></Box>
					</Button>
				</form>
			</Grid>

			<Grid item md={3}>
				<div>
					<img src={image} alt="" style={{ width: '100%' }} />
				</div>
			</Grid>
		</Grid>
	);
}

export default Login;

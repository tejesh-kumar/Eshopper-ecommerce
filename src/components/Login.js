import React, { useState, Fragment } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import { Grid, TextField, Button, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AuthService from '../services/auth.service';
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
	}
}));

function Login(props) {
	const classes = useStyles();
	let history = useHistory();

	const [ loginDetails, setLoginDetails ] = useState({ username: '', password: '' });
	const [ registerDetails, setRegisterDetails ] = useState({ username: '', email: '', password: '' });

	const usernameChangeHandler = (e) => {
		const loginObj = { ...loginDetails };
		const newUsername = e.target.value;
		loginObj.username = newUsername;
		console.log(loginDetails);
		setLoginDetails(loginObj);
	};

	const passwordChangeHandler = (e) => {
		const loginObj = { ...loginDetails };
		const newPassword = e.target.value;
		loginObj.password = newPassword;
		console.log(loginDetails);
		setLoginDetails(loginObj);
	};

	const registerUsernameChangeHandler = (e) => {
		const regObj = { ...registerDetails };
		const newUsername = e.target.value;
		regObj.username = newUsername;
		// console.log(registerDetails)
		setRegisterDetails(regObj);
	};

	const registerPasswordChangeHandler = (e) => {
		const regObj = { ...registerDetails };
		const newPassword = e.target.value;
		regObj.password = newPassword;
		// console.log(registerDetails)
		setRegisterDetails(regObj);
	};

	const registerEmailChangeHandler = (e) => {
		const regObj = { ...registerDetails };
		const newEmail = e.target.value;
		regObj.email = newEmail;
		// console.log(registerDetails)
		setRegisterDetails(regObj);
	};

	const regUser = async () => {
		await AuthService.register(registerDetails).then(
			(response) => {
			//   setMessage(response.data.message);
			//   setSuccessful(true);
				console.log('Registration successful');
			})
		
		// fetch('https://testecmr.herokuapp.com/users/register/', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify(registerDetails)
		// })
		// 	.then((response) => response.json())
		// 	.then((data) => console.log(data));
	};

	const loginUser = async () => {
		await AuthService.login(loginDetails).then(
			() => {
			  history.replace("/");
			  window.location.reload();
			//   window.addEventListener("popstate", () => {
			// 	history.go(1);
			//   });
			})  
		// fetch('https://testecmr.herokuapp.com/users/login/', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify(loginDetails)
		// })
		// 	.then((response) => response.json())
		// 	.then((data) => {
		// 		const loginDetail = JSON.stringify(data);
		// 		localStorage.setItem('loginDetail', loginDetail);
				
		// 	})
		// 	.catch((err) => console.log(err));
		// .then(data => console.log(data))
	};

	return (
		<Grid item container justify="center">
			<Grid item md={3}>
				<Route
					path="/login"
					exact
					render={() => (
						<Fragment>
							<Heading title="Login" />
							<form className={classes.root} noValidate autoComplete="off">
								<TextField
									id="outlined-basic"
									label="Username"
									variant="outlined"
									value={loginDetails.username}
									onChange={usernameChangeHandler}
								/>
								<TextField
									id="outlined-basic"
									label="Password"
									variant="outlined"
									value={loginDetails.password}
									onChange={passwordChangeHandler}
								/>
								<Button variant="contained" color="primary" onClick={loginUser}>
									<Box py={0.7}>
										<Typography variant="body1" color="secondary">
											LOGIN
										</Typography>
									</Box>
								</Button>
							</form>

							<Link to="/login/register">
								<Box py={0.7}>
									<Typography variant="body1" color="primary">
										New User? Create Account
									</Typography>
								</Box>
							</Link>
						</Fragment>
					)}
				/>

				<Route
					path="/login/register"
					exact
					render={() => (
						<Fragment>
							<Heading title="Sign up" />
							<form className={classes.root} noValidate autoComplete="off">
								<TextField
									id="outlined-basic"
									label="Username"
									variant="outlined"
									value={registerDetails.username}
									onChange={registerUsernameChangeHandler}
								/>
								<TextField
									id="outlined-basic"
									label="Email"
									variant="outlined"
									value={registerDetails.email}
									onChange={registerEmailChangeHandler}
								/>
								<TextField
									id="outlined-basic"
									label="Password"
									variant="outlined"
									value={registerDetails.password}
									onChange={registerPasswordChangeHandler}
								/>
								<Button variant="contained" color="primary" onClick={regUser}>
									<Box py={0.7}>
										<Typography variant="body1" color="secondary">
											REGISTER
										</Typography>
									</Box>
								</Button>
							</form>

							<Link to="/login" style={{color: 'inherit', textDecoration: 'none'}}>
								<Box py={0.7}>
									<Typography variant="body1" color="primary">
										Back to login
									</Typography>
								</Box>
							</Link>
						</Fragment>
					)}
				/>
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

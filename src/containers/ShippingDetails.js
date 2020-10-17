import React, { Fragment, useState } from 'react';
import { Grid, Typography, Button, Box, TextField, TextareaAutosize } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Heading from '../utils/Heading';

const useStyles = makeStyles((theme) => ({
	outer: {
		marginTop: '50px'
	},
	root: {
		'& > *': {
			marginBottom: theme.spacing(3),
			width: '100%',
			fontSize: '14px'
			// padding: '16px'
		}
		// ['& input']: {
		// 	padding: '15px 12px'
		// },
		// ['& textarea']: {
		// 	padding: '15px 12px'
		// }
	}
}));

function ShippingDetails({ sendShippingDetails }) {
	const classes = useStyles();

	const [ name, setName ] = useState('');
	const [ address, setAddress ] = useState('');
	const [ contact, setContact ] = useState('');

	const nameChangeHandler = (e) => {
		setName(e.target.value);
	};

	const addressChangeHandler = (e) => {
		setAddress(e.target.value);
	};

	const contactChangeHandler = (e) => {
		setContact(e.target.value);
	};

	return (
		<Grid className={classes.outer} item container justify="center">
			<Grid item>
				<Fragment>
					<Heading title="Shipping Details" />
					<form className={classes.root} noValidate autoComplete="off">
						<TextField
							id="outlined-basic"
							label="Name"
							variant="outlined"
							value={name}
							onChange={nameChangeHandler}
						/>

						<TextareaAutosize
							label="Address"
							variant="outlined"
							rowsMin={4}
							placeholder="Enter Shipping Address"
							value={address}
							onChange={addressChangeHandler}
						/>

						<TextField
							label="Contact Number"
							variant="outlined"
							value={contact}
							onChange={contactChangeHandler}
						/>
						<Button
							variant="contained"
							color="primary"
							onClick={() => sendShippingDetails(name, address, contact)}
						>
							<Box py={0.7}>
								<Typography variant="body1" color="secondary">
									Order Now
								</Typography>
							</Box>
						</Button>
					</form>
				</Fragment>
			</Grid>
		</Grid>
	);
}

export default ShippingDetails;

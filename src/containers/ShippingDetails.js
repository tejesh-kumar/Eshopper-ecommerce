import React, { Fragment } from 'react';
import { Grid, Typography, Button, Box, TextField, TextareaAutosize } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Heading from '../utils/Heading';

const useStyles = makeStyles((theme) => ({
    outer: {
        marginTop: '50px',
    },
	root: {

		'& > *': {
			marginBottom: theme.spacing(3),
			width: '100%',
			fontSize: '14px'
			// padding: '16px'
		},
		['& input']: {
			padding: '15px 12px'
        },
        ['& textarea']: {
			padding: '15px 12px'
		}
	}
}));

function ShippingDetails() {
	const classes = useStyles();

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
							// value={loginDetails.username}
							// onChange={usernameChangeHandler}
						/>

						<TextareaAutosize
							id="outlined-basic"
							label="Address"
                            variant="outlined"
                            rowsMin={4}
                            placeholder="Enter Shipping Address"
							// value={loginDetails.username}
							// onChange={usernameChangeHandler}
						/>

						<TextField
							id="outlined-basic"
							label="Contact Number"
							variant="outlined"
							// value={loginDetails.password}
							// onChange={passwordChangeHandler}
						/>
						<Button variant="contained" color="primary">
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

import React, { Fragment } from 'react';
import { Grid, Container, Box, IconButton } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/styles';

import Logo from '../images/home/logo.png';

const useStyles = makeStyles((theme) => ({
	footerTop: {
		padding: '40px 0',
        backgroundColor: theme.palette.secondary.main,

        '& p': {
            color: theme.palette.text.tertiary,
            marginBottom: theme.spacing(0.5)
        }
	},
	footerBottom: {
		backgroundColor: '#D6D6D0'
	},
	footerBottomText: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		padding: '15px',

		[theme.breakpoints.up('sm')]: {
			justifyContent: 'space-between',
			flexDirection: 'row'
		}
	},
	form: {
		'& > *': {
			margin: `${theme.spacing(0.5)} 0`,
            width: '100%',
            padding: 0,
            height: '20px'
        },
        '& input': {
            height: '30px',
            padding: '24px 12px',
            fontSize: '14px',
            border: 'none',
            boxShadow: '3px 3px 8px #ccc',
            flexGrow: 1
        },
        '& button': {
            padding: '0 16px',
            backgroundColor: theme.palette.primary.main,
            borderRadius: 0,
            boxShadow: '3px 3px 8px #ccc',
            color: 'white'
        }
        
	}
}));

function Footer() {
	const classes = useStyles();

	return (
		<Fragment>
			<Container maxWidth="xl" className={classes.footerTop}>
				<Container>
					<Grid item container>
						<Grid item container md={3} alignItems="flex-start">
							<img src={Logo} alt="logo" />
						</Grid>
						<Grid item container md={3} direction="column">
							<Grid item>
								<Box mb={1.5}>
									<h4>POLICIES</h4>
								</Box>
							</Grid>
							<Grid item><p>Terms of Use</p></Grid>
							<Grid item><p>Privacy Policy</p></Grid>
							<Grid item><p>Refund Policy</p></Grid>
						</Grid>
						<Grid item container md={3} direction="column">
							<Grid item>
								<Box mb={1.5}>
									<h4>SERVICES</h4>
								</Box>
							</Grid>
							<Grid item><p>Online Help</p></Grid>
							<Grid item><p>Contact Us</p></Grid>
							<Grid item><p>FAQ's</p></Grid>
						</Grid>
						<Grid item md={3}>
                            <Box mb={1.5}>
								<h4>ABOUT ESHOPPER</h4>
							</Box>
							<form className={classes.form} noValidate autoComplete="off">
                                <Grid container>
								{/* <TextField id="outlined-basic" label="Your Email Address" variant="filled" /> */}
                                <input type="text" placeholder="Your Email Address" />
                                <IconButton color="primary" aria-label="sendMessage" >
                                  <ArrowForwardIcon />
                                </IconButton>
                                </Grid>
							</form>
						</Grid>
					</Grid>
				</Container>
			</Container>
			<Container maxWidth="xl" className={classes.footerBottom}>
				<Container className={classes.footerBottomText}>
					<div>Copyright @ 2020. All rights reserved</div>
					<div>Designed by E-Shopper</div>
				</Container>
			</Container>
		</Fragment>
	);
}

export default Footer;

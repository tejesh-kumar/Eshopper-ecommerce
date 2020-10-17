import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
	root: {
		fontSize: '12px',
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.text.primary,

		[theme.breakpoints.up('sm')]: {
			// backgroundColor: 'orange'
		}
	},
	inner: {
		display: 'flex',
		justifyContent: 'center',
		padding: '0 16px',

		[theme.breakpoints.up('sm')]: {
			justifyContent: 'space-between',
			alignItems: 'center'
		}
	},
	iconsContainerStyle: {
		display: 'flex'
	},
	iconContainerStyle: {
		display: 'flex',
		alignItems: 'center',
		padding: '10px 15px'
	},
	iconStyle: {
		fontSize: '14px'
	}
}));

function HeaderTop() {
	const classes = useStyles();

	return (
		<Grid className={classes.root} item container justify="center">
			<Grid className={classes.inner} item container xs={12} md={10}>
				<div className={classes.iconsContainerStyle}>
					<div className={classes.iconContainerStyle}>
						<PhoneIcon className={classes.iconStyle} />
						<Box ml={1}>
							<span>9595959595</span>
						</Box>
					</div>
					<div className={classes.iconContainerStyle}>
						<EmailIcon className={classes.iconStyle} />
						<Box ml={1}>
							<span>tejesh@gmail.com</span>
						</Box>
					</div>
				</div>
				<div className={classes.iconsContainerStyle}>
					<div className={classes.iconContainerStyle}>
						<FacebookIcon className={classes.iconStyle} />
					</div>
					<div className={classes.iconContainerStyle}>
						<TwitterIcon className={classes.iconStyle} />
					</div>
					<div className={classes.iconContainerStyle}>
						<InstagramIcon className={classes.iconStyle} />
					</div>
				</div>
			</Grid>
		</Grid>
	);
}

export default HeaderTop;

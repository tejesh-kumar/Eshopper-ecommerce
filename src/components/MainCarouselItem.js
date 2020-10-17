import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import OrangeButton from '../utils/OrangeButton';
import heroImg1 from '../images/home/girl1.jpg';

const useStyles = makeStyles((theme) => ({
	btnStyle: {
		// backgroundColor: 'transparent',
		zIndex: 50,
		padding: 0,
		// width: '20px',
		position: 'absolute',
		top: '45%',
		'&:hover': { color: theme.palette.text.orange }
	},
	iconStyle: {
		// fontSize: '40px',
		height: '60px',
		width: '60px'
	},
	heroTextOrangeStyle: {
		color: theme.palette.text.orange
	},
	heroTextGreyStyle: {
		color: theme.palette.text.primary
	},
	heroImgStyle: {
		display: 'flex',
		justifyContent: 'center',
		height: '40vmin',

		'& img': {
			height: 'inherit',
			maxWidth: '100%'
		}
	}
}));

function MainCarouselItem() {
	const classes = useStyles();

	return (
		<div>
			<div>
				<Grid container>
					<Grid item md={1} />
					<Grid item container xs={12} md={5} justify="center" alignItems="center">
						<div>
							<Typography className={classes.heroTextOrangeStyle} variant="h3">
								E<span className={classes.heroTextGreyStyle}>-SHOPPER</span>
							</Typography>
							<Box my={2}>
								<Typography variant="body1">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</Typography>
							</Box>
							{/* <Button variant="contained" color="primary">BUY NOW</Button> */}
							<OrangeButton />
						</div>
					</Grid>
					<Grid item xs={12} md={6}>
						<div className={classes.heroImgStyle}>
							<img src={heroImg1} alt="" />
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default MainCarouselItem;

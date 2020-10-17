import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

// import image from '../images/cart/one.png';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '20px 10px',
		border: `1px solid ${theme.palette.secondary.main}`
	},
	img: {
		height: '100px',

		'& img': {
			height: 'inherit',
			maxWidth: '100%'
		}
	},
	title: {
		fontSize: '20px'
	},
	quantity: {
		display: 'flex',
		alignItems: 'center'
	},
	total: {
		fontSize: '24px',
		color: theme.palette.text.orange
	}
}));

function CheckoutItem({ cartProduct }) {
	const classes = useStyles();
	const { name, image, price, size } = cartProduct;
	const productTotal = parseInt(price) * parseInt(size);

	return (
		<Grid className={classes.root} item container justify="flex-start" alignItems="center">
			<Grid item container alignItems="center" xs={4} sm={4}>
				<div className={classes.img}>
					{/* <img src={image} alt="product-img"/> */}
					<img src={image} alt="product-img" />
				</div>
			</Grid>

			<Grid
				spacing={3}
				item
				container
				// alignItems="center"
				direction="column"
				xs={8}
			>
				<Grid item container className={classes.title} style={{ paddingBottom: '0' }}>
					{/* <Typography variant="h6" color="initial">{name}</Typography> */}
					<Typography variant="h6" color="initial">
						{/* Polo Black Shirt */}
						{name}
					</Typography>
				</Grid>

				<Grid item container justify="space-around" alignItems="center" direction="row">
					<Grid item container justify="space-between" alignItems="center" md={6}>
						<div className={classes.price}>
							{/* <div>Price:</div> */}
							Rs.<span>{price}</span>
							{/* Rs.<span>500</span> */}
						</div>
						<div className={classes.quantity}>
							<div>Qty:</div>
							{/* <Box mx={2}><Typography variant="h5">{size}</Typography></Box> */}
							<Box ml={2}>
								<Typography variant="h5">{size}</Typography>
							</Box>
						</div>
					</Grid>

					<Grid item container justify="flex-end" md={6}>
						<Box mt={1}>
							<Typography variant="h4" className={classes.total} align="right">
								Rs.<span>{productTotal}</span>
								{/* Rs.<span>565</span> */}
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default CheckoutItem;

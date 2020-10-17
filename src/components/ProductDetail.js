import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography, IconButton, Box } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { makeStyles } from '@material-ui/styles';

import OrangeButton from '../utils/OrangeButton';
import WhiteButton from '../utils/WhiteButton';

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: '40px'
	},
	productImg: {
		height: '350px',

		'& img': {
			maxWidth: '100%'
		}
	},
	productTitle: {
		fontSize: '20px',
		color: theme.palette.text.secondary,
		marginBottom: '15px'
	},
	productPrice: {
		color: theme.palette.text.orange,
		marginBottom: '10px'
	},
	quantity: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: '20px'
	},
	secondaryDetails: {
		fontSize: '14px',
		marginTop: '25px',

		'& > children': {
			marginTop: '20px'
		},

		'& h6': {
			fontSize: '14px',
			fontWeight: 'bold'
		}
	}
}));

function ProductDetail({
	products,
	cart,
	quantity,
	incrementQtyHandler,
	decrementQtyHandler,
	updateCart,
	selectedProductToPurchaseHandler
}) {
	const classes = useStyles();

	const { productId } = useParams();
	console.log('productId', productId);

	if (products.length === 0) {
		return null;
	}

	const currentlyViewingProduct = products.find((product) => parseInt(product.id) === parseInt(productId));
	const { id, brand, category, imgUrl, price, title, availability } = currentlyViewingProduct;
	console.log('currently', currentlyViewingProduct);

	// let quantity = 1;
	// cart.forEach(product => {
	// 	if(product.id === id) {
	// 		quantity = product.qty;
	// 	}
	// })
	console.log(quantity);

	return (
		<Grid className={classes.root} container spacing={5} justify="center" alignItems="center">
			<Grid item md={4}>
				<div className={classes.productImg}>
					<img src={imgUrl} alt="productImg" />
				</div>
			</Grid>
			<Grid item container md={6} direction="column">
				<Grid item>
					<Typography className={classes.productTitle} variant="h5">
						{title}
					</Typography>
				</Grid>
				<Grid item>
					<Typography className={classes.productPrice} variant="h4">
						Rs. <span>{price}</span>
					</Typography>
				</Grid>

				<Grid item container>
					<div className={classes.quantity}>
						<IconButton aria-label="" onClick={incrementQtyHandler}>
							<AddIcon />
						</IconButton>
						<Box mx={5}>
							<Typography variant="h5">{quantity}</Typography>
						</Box>
						<IconButton aria-label="" onClick={decrementQtyHandler}>
							<RemoveIcon />
						</IconButton>
					</div>
				</Grid>

				<Grid item container spacing={3}>
					<Grid item>
						<WhiteButton updateCart={updateCart} productId={id} />
					</Grid>
					<Grid item>
						<OrangeButton
							selectedProductToPurchaseHandler={selectedProductToPurchaseHandler}
							productId={id}
							quantity={quantity}
						/>
					</Grid>
				</Grid>

				<Grid className={classes.secondaryDetails} item container>
					<Grid item container alignItems="center">
						<Grid item>
							<Typography variant="h6">Availability: </Typography>
						</Grid>
						<Grid item>
							<Typography variant="inherit">{availability}</Typography>
						</Grid>
					</Grid>

					<Grid item container alignItems="center">
						<Grid item>
							<Typography variant="h6">Category: </Typography>
						</Grid>
						<Grid item>
							<Typography variant="inherit">{category}</Typography>
						</Grid>
					</Grid>

					<Grid item container spacing={1} alignItems="center">
						<Grid item>
							<Typography variant="h6">Brand: </Typography>
						</Grid>
						<Grid item>
							<Typography variant="inherit">{brand}</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default ProductDetail;

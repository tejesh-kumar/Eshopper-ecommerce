import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import WhiteButton from './WhiteButton';
// import Image from '../images/home/product2.jpg'

const useStyles = makeStyles((theme) => ({
	root: {
		border: '1px solid #f7f7f5',
		padding: '10px'
	},
	priceStyle: {
		color: theme.palette.text.orange, 
		fontWeight: 700,
		fontSize: '24px',
		margin: '20px 0px 10px 0'
	},
	titleStyle: {
		marginBottom: '10px',
		fontSize: '14px',
		textAlign: 'center'
	},
	imageStyle: {
        height: '100px',

        '& img': {
            height: 'inherit',
    		maxWidth: '100%'
        }
	}
}));

function ProductCard({productInfo, updateCart }) {
	const classes = useStyles();

	return (
		<Grid className={classes.root} item container direction="column" alignItems="center" justify="center">
			<Grid className={classes.imageStyle} item>
				<img src={productInfo.imgUrl} alt="productImage" />
			</Grid>
			<Grid item>
				<Typography variant="h2" className={classes.priceStyle}>
					Rs.<span>{productInfo.price}</span>
				</Typography>
			</Grid>
			<Grid item>
				<Typography variant="body1" className={classes.titleStyle}>
					{productInfo.title}
				</Typography>
			</Grid>
			<Grid item>
				<Box mb="25px">
					<WhiteButton updateCart={updateCart} productId={productInfo.id} />
				</Box>
			</Grid>
        </Grid>
	);
}

export default ProductCard;

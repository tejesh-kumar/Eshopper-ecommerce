import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import ProductCard from '../utils/ProductCard';

// import Image from '../../images/home/gallery2.jpg'

const useStyles = makeStyles((theme) => ({
	tab: {
		backgroundColor: theme.palette.tertiary.main,
		marginBottom: '40px',
		display: 'flex',
		flexDirection: 'column',
		color: theme.palette.text.tertiary,
		fontSize: '14px',
		textTransform: 'uppercase',

		[theme.breakpoints.up('md')]: {
			flexDirection: 'row'
		}
	},
	tabItem: {
		padding: '10px 15px',
		transition: '0.3s',
		cursor: 'pointer',

		'&:hover': {
			backgroundColor: theme.palette.primary.main,
			color: 'white'
		}
	},
	tabItemActive: {
		padding: '10px 15px',
		transition: '0.3s',
		cursor: 'pointer',
		backgroundColor: theme.palette.primary.main,
		color: 'white'
	}
}));

export default function TabItems({ categories, products, tabCategory, updateCart, tabCategoryHandler }) {
	const classes = useStyles();

	let modifiedProducts = products.filter((pr) => pr.category === tabCategory);

	return (
		<Grid item container>
			<Grid item container className={classes.tab}>
				{/* <div className={classes.tabItem}>Blazers</div> 
               <div className={classes.tabItem}>Blazers</div> 
               <div className={classes.tabItem}>Blazers</div> 
               <div className={classes.tabItem}>Blazers</div> 
               <div className={classes.tabItem}>Blazers</div>  */}

				{categories.length > 0 ? (
					categories.map(
						(item) =>
							item.category === tabCategory ? (
								<div
									key={item.id}
									className={classes.tabItemActive}
									onClick={() => tabCategoryHandler(item.category)}
								>
									{item.category}
								</div>
							) : (
								<div
									key={item.id}
									className={classes.tabItem}
									onClick={() => tabCategoryHandler(item.category)}
								>
									{item.category}
								</div>
							)
					)
				) : null}
			</Grid>
			<Grid item container>
				<Grid item container spacing={4}>
					{/* <Grid item md={3} xs={6}><ProductCard img={Image}/></Grid>
                <Grid item md={3} xs={6}><ProductCard img={Image}/></Grid>
                <Grid item md={3} xs={6}><ProductCard img={Image}/></Grid>
                <Grid item md={3} xs={6}><ProductCard img={Image}/></Grid> */}

					{products.length > 0 ? (
						modifiedProducts.map((item) => (
							<Grid item md={3} sm={6} key={item.id}>
								<Link
									to={`/product/${item.title}/${item.id}`}
									style={{ color: 'inherit', textDecoration: 'inherit' }}
								>
									<ProductCard img={Image} productInfo={item} updateCart={updateCart} />
								</Link>
							</Grid>
						))
					) : null}
				</Grid>
			</Grid>
		</Grid>
	);
}

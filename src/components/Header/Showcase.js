import React, { Fragment } from 'react';
import { Route, useParams } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
// import { Route, Switch } from 'react-router-dom';

import LeftSidebarSection from '../../utils/LeftSidebarSection';
import FeaturedItems from '../../utils/ProductList';
import TabItems from './TabItems';
import RecommendedItems from '../../utils/RecommendedItems';

import banner from '../../images/home/shipping.jpg';
import ProductDetail from '../ProductDetail';
// import ProductCard from '../../utils/ProductCard';

function Showcase({products, categories, brands, tabCategory, quantity, searchString, incrementQtyHandler, decrementQtyHandler, updateCart, selectedProductToPurchaseHandler, tabCategoryHandler}) {
// function Showcase({products}) {

	let dynamicShowcase;

	dynamicShowcase = (
		<Fragment>
			<Route
				path={[ '/', '/home' ]}
				render={() => (
					<Grid item container xs={12} md={9} alignItems="flex-start" spacing={6}>
						<Grid item container>
							<FeaturedItems products={products} updateCart={updateCart} />
						</Grid>
						<Grid item container>
							<TabItems categories={categories} products={products} tabCategory={tabCategory} updateCart={updateCart} tabCategoryHandler={tabCategoryHandler} />
						</Grid>
				{/* <Grid item container>
					<RecommendedItems products={products} updateCart={updateCart} />
				</Grid> */}
					</Grid>
				)}
				exact
			/>

			<Route
				exact
				path={'/shop'}
				render={() => (
					<Grid item container xs={12} md={9} alignItems="flex-start">
						<Grid item container justify="flex-start" alignItems="flex-start">
							<FeaturedItems products={products} updateCart={updateCart} />
						</Grid>
					</Grid>
				)}
			/>


			<Route
				path={['/shop/category/:categoryId', '/shop/brand/:brandId', '/shop/search/:searchStr']}
				render={() => (
					<Grid item container xs={12} md={9} alignItems="flex-start">
						<Grid item container>
							<FeaturedItems products={products} updateCart={updateCart} />
						</Grid>
					</Grid>
				)}
			/>



			<Route
				path={`/product/*/:productId`}
				render={() => (
					<Grid item container xs={12} md={9}>
						<Grid item container alignItems="flex-start">
							<ProductDetail products={products} quantity={quantity} incrementQtyHandler={incrementQtyHandler} decrementQtyHandler={decrementQtyHandler} updateCart={updateCart} selectedProductToPurchaseHandler={selectedProductToPurchaseHandler} />
						</Grid>
						{/* <Grid item container>
							<RecommendedItems />
						</Grid> */}
					</Grid>
				)}
			/>
		</Fragment>
	);

	// dynamicShowcase = (
	// 	<Route path={"/shop"} render={() => (
	// 		<Grid item container xs={12} md={9}>
	// 			<Grid item container>
	// 				<FeaturedItems />
	// 			</Grid>
	// 		</Grid>
	// 	)}/>
	// );

	// dynamicShowcase = (
	// 	<Route path={["/", "/home"]} render={() => (

	// 	<Grid item container xs={12} md={9}>
	// 	<Grid item container>
	// 		<ProductDetail />
	// 	</Grid>
	// 	<Grid item container>
	// 		<RecommendedItems />
	// 	</Grid>
	// </Grid>
	// 	)}/>

	// );

	return (
		<Container>
			<Grid item container spacing={5}>
				<Grid item container direction="column" justify="flex-start" xs={12} md={3}>
					<Grid item xs={12}>
						<LeftSidebarSection title="category" linkItems={categories} />
						<LeftSidebarSection title="brand" linkItems={brands} />
						<Grid item>
							<img src={banner} alt="banner" style={{maxWidth: '100%'}} />
						</Grid>
					</Grid>
				</Grid>

				{dynamicShowcase}
			</Grid>
		</Container>
	);
}

export default Showcase;

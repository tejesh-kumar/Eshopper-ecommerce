import React from 'react';
import { Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import MainCarousel from '../../components/MainCarousel';
import Showcase from '../../components/Showcase';

function Home(props) {
	return (
		<Grid container direction="column">
			<Route
				path={[ '/', '/home' ]}
				render={() => (
					<Grid item container>
						<MainCarousel
							products={props.products}
							homeSlider={props.homeSlider}
							selectedProductToPurchaseHandler={props.selectedProductToPurchaseHandler}
						/>
					</Grid>
				)}
				exact
			/>

			<Grid item container>
				<Showcase {...props} />
			</Grid>
		</Grid>
	);
}

export default Home;

import React from 'react';
import { Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import MainCarousel from '../../components/Header/MainCarousel';
import Showcase from '../../components/Header/Showcase';

function Home(props) {
	return (
		<Grid container direction="column">
			<Route
				path={[ '/', '/home' ]}
				render={() => (
					<Grid item container>
						<MainCarousel />
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

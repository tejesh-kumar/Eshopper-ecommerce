import React from 'react';
import { Grid } from '@material-ui/core';

import Showcase from './Showcase';

function Shop() {
	return (
		<Grid container direction="column">
			<Grid item container>
				<Showcase page="shop" />
			</Grid>
		</Grid>
	);
}

export default Shop;

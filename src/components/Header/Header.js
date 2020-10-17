import React from 'react';
import { Grid, Divider } from '@material-ui/core';

import HeaderTop from './HeaderSub/HeaderTop';
import HeaderMiddle from './HeaderSub/HeaderMiddle';
import HeaderBottom from './HeaderSub/HeaderBottom';

function Header({ currentUser, logout, searchHandler }) {
	return (
		<Grid container>
			<HeaderTop />
			<HeaderMiddle logout={logout} currentUser={currentUser} />
			<Divider />
			<HeaderBottom searchHandler={searchHandler} />
		</Grid>
	);
}

export default Header;

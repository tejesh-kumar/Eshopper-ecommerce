import React from 'react';
import {NavLink} from 'react-router-dom'

import { Container, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
	root: {
		// height: '10vh',
		// backgroundColor: 'green',
		fontSize: '17px',
		color: theme.palette.text.primary,
		padding: '30px 0',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',

		[theme.breakpoints.up('sm')]: {
			justifyContent: 'space-between',
			flexDirection: 'row'
		}
    },
    menubar: {
        display: 'flex',
		alignItems: 'center',
		
		// '& a': {
		// 	color: 'orange',
		// 	textDecoration: 'none'
		// }
    },
    menuItem: {
		padding: '0 15px',
		textDecoration: 'none',
		border: 0,
		color: 'orange',

		'a': {
			textDecoration: 'none'
		}
	},
	active: {
		color: 'black'
	},
    search: {
        fontSize: '12px',
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.main,
        padding: '4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

function HeaderBottom() {
	const classes = useStyles();

	return (
		<Container maxWidth="lg" className={classes.root}>
			<div className={classes.menubar} >
                <NavLink to='/' activeClassName={classes.active} className={classes.menuItem} exact>Home</NavLink>
                <NavLink to='/shop' activeClassName={classes.active} className={classes.menuItem}>Shop</NavLink>
                <NavLink to='/product' activeClassName={classes.active} className={classes.menuItem}>About</NavLink>
                <NavLink to='/contact' activeClassName={classes.active} className={classes.menuItem}>Contact</NavLink>

            </div>
			<div className={classes.search}>
				<div className={classes.searchIcon}>
					<SearchIcon />
				</div>
				<InputBase
					placeholder="Search…"
					classes={{
						root: classes.inputRoot,
						input: classes.inputInput
					}}
					inputProps={{ 'aria-label': 'search' }}
				/>
			</div>
		</Container>
	);
}

export default HeaderBottom;

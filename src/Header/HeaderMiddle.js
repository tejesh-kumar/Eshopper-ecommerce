import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import PersonIcon from '@material-ui/icons/Person';
import StarIcon from '@material-ui/icons/Star';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import LockIcon from '@material-ui/icons/Lock';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import AuthService from '../services/auth.service';
import Logo from '../images/home/logo.png';

const useStyles = makeStyles((theme) => ({
	root: {
		fontSize: '14px',
		color: theme.palette.text.primary,
		padding: '20px 0',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',

		[theme.breakpoints.up('sm')]: {
			justifyContent: 'space-between',
			flexDirection: 'row'
		}
	},
	containerStyle: {
		display: 'flex',
		alignItems: 'center',

		[theme.breakpoints.up('sm')]: {
			justifyContent: 'space-between',
			alignItems: 'center'
		}
	},
	navItem: {
		padding: '0 3px',
		display: 'flex',
		alignItems: 'center',

		[theme.breakpoints.up('sm')]: {
			padding: '0 15px'
		}
	},
	iconStyle: {
		fontSize: '16px',
		marginRight: '4px'
	}
}));

function HeaderMiddle({logout}) {
	const classes = useStyles();
	const currentUser = AuthService.getCurrentUser();

	return (
		<Container maxWidth="lg" className={classes.root}>
			<div className={classes.containerStyle}>
				<div className="header__logo">
					<img src={Logo} alt="" />
				</div>
			</div>

			<div className={classes.containerStyle}>
				<div className={classes.navItem}>
					<PersonIcon className={classes.iconStyle} />
					<span>Account</span>
				</div>
				{/* <div className={classes.navItem}>
                        <StarIcon className={classes.iconStyle} />
                       <span>Wishlist</span> 
                    </div>
                    <div className={classes.navItem}>
                        <MyLocationIcon className={classes.iconStyle} />
                       <span>Checkout</span>
                    </div> */}

				<NavLink
					to="/cart"
					activeStyle={{ color: 'orange' }}
					style={{ color: 'inherit', textDecoration: 'none' }}
				>
					<div className={classes.navItem}>
						<ShoppingCartIcon className={classes.iconStyle} />
						<span>Cart</span>
					</div>
				</NavLink>

				{currentUser ? (
					<div className={classes.navItem} onClick={() => logout()} style={{cursor: 'pointer'}}>
						<LockIcon className={classes.iconStyle} />
						<span>Logout</span>
					</div>
				) : (
					<NavLink
						to="/login"
						activeStyle={{ color: 'orange' }}
						style={{ color: 'inherit', textDecoration: 'none' }}
					>
						<div className={classes.navItem}>
							<LockIcon className={classes.iconStyle} />
							<span>Login</span>
						</div>{' '}
					</NavLink>
				)}
			</div>
		</Container>
	);
}

export default HeaderMiddle;

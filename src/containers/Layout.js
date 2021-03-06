import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import Aux from '../hoc/Auxiliary';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Home from './Home/Home';
import Login from '../components/Login';
import Cart from '../containers/Cart';
import Checkout from '../containers/Checkout';
import AuthService from '../services/auth.service';
import ProtectedRoute from '../hoc/ProtectedRoute';
import authHeader from '../services/auth-header';

function Layout() {
	const [ currentUser, setCurrentUser ] = useState(undefined);
	const [ homeSlider, setHomeSlider ] = useState([]);
	const [ products, setProducts ] = useState([]);
	const [ categories, setCategories ] = useState([]);
	const [ brands, setBrands ] = useState([]);
	const [ tabCategory, setTabCategory ] = useState('');
	const [ updateQty, setUpdateQty ] = useState(1);
	const [ cart, setCart ] = useState([]);
	const [ selectedProductToPurchase, setSelectedProductToPurchase ] = useState({});
	const [ searchString, setSearchString ] = useState('');

	const history = useHistory();

	useEffect(() => {
		// const user = AuthService.getCurrentUser();
		// if (user) {
		//     setCurrentUser(user);
		// }

		// let sessionCart = {};
		//     if(sessionStorage.getItem('cart') !== null) {
		//         sessionCart = JSON.parse(sessionStorage.getItem('cart'));
		//     }
		// setCart(sessionCart.products);

		const getHomeSlider = async () => {
			await fetch('https://testecmr.herokuapp.com/homepageslider/')
				.then((response) => response.json())
				.then((data) => setHomeSlider(data))
				.catch((err) => console.log(err));
		};

		getHomeSlider();

		const fetchProducts = async () => {
			await fetch('https://testecmr.herokuapp.com/products/')
				.then((response) => response.json())
				.then((data) => {
					let newData = data.map((item) => {
						return {
							id: item.id,
							title: item.name,
							imgUrl: item.image,
							price: item.price,
							category: item.category,
							brand: item.brand,
							availability: item.availability
						};
					});
					setProducts(newData);
				})
				.catch((err) => console.log(err));
		};

		fetchProducts();

		const fetchCategories = async () => {
			await fetch('https://testecmr.herokuapp.com/category/').then((response) => response.json()).then((data) => {
				let newData = data.map((item) => {
					return { id: item.id, category: item.name };
				});
				console.log(newData);
				setCategories(newData);
				setTabCategory(newData[0].category);
			});
		};

		fetchCategories();

		const fetchBrands = async () => {
			// await fetch('https://cfd7348e-6a50-40f0-8fb1-bbffec42d549.mock.pstmn.io/brands')
			await fetch('https://testecmr.herokuapp.com/brand/').then((response) => response.json()).then((data) => {
				let newData = data.map((item) => {
					return { id: item.id, brand: item.name };
				});
				console.log(newData);
				setBrands(newData);
			});
		};

		fetchBrands();
	}, []);

	useEffect(() => {
		const user = AuthService.getCurrentUser();
		if (user) {
			setCurrentUser(user);
		}

		let sessionCart = { products: [], cartStatus: 'outOfSync' };
		if (sessionStorage.getItem('cart') !== null) {
			sessionCart = JSON.parse(sessionStorage.getItem('cart'));
		}
		setCart(sessionCart.products);
	}, []);

	const incrementQtyHandler = () => {
		let tempQty = updateQty;
		tempQty = tempQty + 1;
		setUpdateQty(tempQty);
	};

	const decrementQtyHandler = () => {
		let tempQty = updateQty;

		if (tempQty > 1) {
			tempQty = tempQty - 1;
			setUpdateQty(tempQty);
		}
	};

	const updateCart = async (id, actionType = 'add', qty = 1) => {
		if (currentUser === undefined) {
			// cart = [{"token": "858f0d32c05f88b6375b0d8dbd36b2e10f518738", "products": "[{3, 2}, {5, 1}]", "cartStatus": "outOfSync"}, {}]
			let sessionCart = {};
			if (sessionStorage.getItem('cart') !== null) {
				sessionCart = JSON.parse(sessionStorage.getItem('cart'));
			}

			// if(currentUser === undefined) {
			//     const token = currentUser.token;
			// }
			const tempCart = [ ...cart ];
			const matchingProd = tempCart.find((prod) => id === prod.id);
			const matchIndex = tempCart.findIndex((prod) => id === prod.id);

			if (actionType === 'delete') {
				tempCart.splice(matchIndex, 1);
			} else if (actionType === 'add') {
				if (matchingProd !== undefined) {
					matchingProd.qty = matchingProd.qty + 1;
					tempCart[matchIndex] = matchingProd;
				} else {
					tempCart.push({ id: id, qty: 1 });
					console.log('tempCart', tempCart);
				}
			} else if (actionType === 'subtract') {
				if (matchingProd.qty === 1) {
					tempCart.splice(matchIndex, 1);
				} else {
					matchingProd.qty = matchingProd.qty - 1;
					tempCart[matchIndex] = matchingProd;
				}
			}
			sessionCart.products = tempCart;
			sessionCart.cartStatus = 'outOfSync';
			sessionStorage.setItem('cart', JSON.stringify(sessionCart));

			setCart(tempCart);
		} else {
			// e.stopPropogation();
			console.log('id', id);

			let tempCart = {};
			console.log('cart', tempCart);

			tempCart = { products: [ { id: id, qty: qty } ], actionType: actionType };

			console.log('tempCart', tempCart);
			// Updating Cart on backend
			await fetch('https://testecmr.herokuapp.com/cart/addcart/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: authHeader()
				},
				body: JSON.stringify(tempCart)
			})
				.then((res) => res.json())
				.then((data) => console.log(data))
				// .then(data => setCartProducts(data))
				.catch((err) => console.log(err));

			setCart(tempCart);
		}
	};

	const selectedProductToPurchaseHandler = (id, qty) => {
		const product = products.find((pr) => pr.id === id);
		console.log('purchaseProduct', id, product, qty);
		product.quantity = qty;
		setSelectedProductToPurchase([ product ]);
	};

	const tabCategoryHandler = (tabCat) => {
		setTabCategory(tabCat);
	};

	const searchHandler = (searchStr) => {
		setSearchString(searchStr);
	};

	console.log(cart);

	const loginUser = async (loginDetails, previousPage) => {
		await AuthService.login(loginDetails).then(() => {
			// history.replace(history.goBack());
			// history.go(-2);
			console.log(previousPage);
			history.replace('/checkout/cart');
			const user = AuthService.getCurrentUser();
			setCurrentUser(user);
			equalizeCart();
		});
	};

	const logout = () => {
		AuthService.logout();
		history.go(-1);
		setCurrentUser(undefined);
	};

	const getCartProducts = async () => {
		await fetch('https://testecmr.herokuapp.com/cart/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: authHeader()
			}
			// body: JSON.stringify(sessionCart.products)
		})
			.then((res) => res.json())
			// .then(data => console.log(data))
			.then((data) => {
				const permanentCart = data.map((cp) => ({ id: cp.product_id_id, qty: cp.size }));
				console.log(permanentCart);
				const tempCart = { products: permanentCart, cartStatus: 'inSync' };
				sessionStorage.setItem('cart', JSON.stringify(tempCart));
				setCart(permanentCart);
			})
			.catch((err) => console.log(err));
	};

	const equalizeCart = async () => {
		let sessionCart = { products: [], cartStatus: 'outOfSync' };
		if (sessionStorage.getItem('cart') !== null) {
			sessionCart = JSON.parse(sessionStorage.getItem('cart'));
		}

		sessionCart.actionType = 'add';

		// let tempCart = {sessionCart};
		console.log('sessioncart', sessionCart);

		// tempCart = {id: id, actionType: actionType, qty: qty}

		// console.log('tempCart', tempCart);
		// Updating Cart on backend
		await fetch('https://testecmr.herokuapp.com/cart/addcart/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: authHeader()
				// 'Authorization': '858f0d32c05f88b6375b0d8dbd36b2e10f518738'
				// 'Authorization': TOKEN
			},
			body: JSON.stringify(sessionCart)
		})
			.then((res) => res.json())
			// .then(data => console.log(data))
			.then((data) => getCartProducts())
			.catch((err) => console.log(err));

		// getCartProducts();
	};

	return (
		<Aux>
			<Grid container direction="column">
				<Grid item container>
					<Header
						logout={logout}
						currentUser={currentUser}
						searchHandler={(searchStr) => searchHandler(searchStr)}
					/>
				</Grid>

				<Grid item container justify="center">
					<main style={{ width: '100%', minHeight: '40vh' }}>
						<Switch>
							<ProtectedRoute
								path={'/login'}
								currentUser={currentUser}
								loginUser={(loginDetails) => loginUser(loginDetails)}
								component={Login}
							/>

							<Route
								path={'/cart'}
								render={() => (
									<Cart
										products={products}
										currentUser={currentUser}
										cart={cart}
										updateCart={(id, actionType) => updateCart(id, actionType)}
									/>
								)}
							/>

							<Route
								path={'/checkout/:purchaseType'}
								render={() =>
									currentUser === undefined ? (
										<Redirect push to="/login?prevPage=cart" />
									) : (
										// <ProtectedRoute path={'/login'} currentUser={currentUser} loginUser={(loginDetails) => loginUser(loginDetails)} component={Login} /> :

										<Route path="/checkout/:purchaseType">
											<Checkout
												cart={cart}
												selectedProductToPurchase={selectedProductToPurchase}
											/>
										</Route>
									)}
							/>

							<Route
								path={[ '/', '/shop' ]}
								render={() => (
									<Home
										homeSlider={homeSlider}
										products={products}
										brands={brands}
										categories={categories}
										tabCategory={tabCategory}
										quantity={updateQty}
										searchString={searchString}
										incrementQtyHandler={incrementQtyHandler}
										decrementQtyHandler={decrementQtyHandler}
										updateCart={(id) => updateCart(id)}
										selectedProductToPurchaseHandler={(id, qty) =>
											selectedProductToPurchaseHandler(id, qty)}
										tabCategoryHandler={(tabCat) => tabCategoryHandler(tabCat)}
									/>
								)}
							/>
						</Switch>
					</main>
				</Grid>

				<Grid item container>
					<Footer />
				</Grid>
			</Grid>
		</Aux>
	);
}

export default Layout;

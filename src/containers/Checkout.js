import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Container, Typography } from '@material-ui/core';

import CheckoutItem from '../components/CheckoutItem';
import ShippingDetails from './ShippingDetails';
import authHeader from '../services/auth-header';

function Checkout({ selectedProductToPurchase }) {
	const [ cartProducts, setCartProducts ] = useState([]);
	// const [total, setTotal] = useState(0)
	const [ totalamt, setTotalamt ] = useState(0);
	const [ taxamt, setTaxamt ] = useState(0);
	const [ grandTotal, setGrandTotal ] = useState(0);
	// const [shippingDetails, setShippingDetails] = useState({})

	let subTotal = 0,
		tax,
		total;

	let { purchaseType } = useParams();

	useEffect(() => {
		const getCartProducts = async () => {
			await fetch('https://testecmr.herokuapp.com/cart/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					// 'Authorization': '858f0d32c05f88b6375b0d8dbd36b2e10f518738'
					// 'Authorization': TOKEN
					Authorization: authHeader()
				}
				// data: JSON.stringify({user_name: 'madhu'})
			})
				.then((res) => res.json())
				// .then(data => console.log(data))
				.then((data) => setCartProducts(data))
				.catch((err) => console.log(err));
		};

		const getBuyNowProduct = () => {
			let newData = selectedProductToPurchase.map((item) => {
				return {
					id: item.id,
					name: item.title,
					image: item.imgUrl,
					price: item.price,
					size: item.quantity
				};
			});

			setCartProducts(newData);
		};

		if (purchaseType === 'cart') {
			getCartProducts();
		} else {
			getBuyNowProduct();
		}
	}, []);

	useEffect(
		() => {
			const calcTotal = () => {
				// total = 0, subTotal = 0, tax = 0;
				cartProducts.forEach((prod) => {
					subTotal = subTotal + prod.size * prod.price;
					console.log(prod.size, prod.price);
				});
				tax = parseInt(5 / 100 * subTotal);
				total = parseInt(subTotal + tax);
				// console.log(subTotal, tax, total);
				setTotalamt(subTotal);
				setTaxamt(tax);
				setGrandTotal(total);
			};

			calcTotal();
		},
		[ cartProducts ]
	);

	const sendShippingDetails = async (name, address, contact) => {
		const detail = {
			name: encodeURIComponent(name),
			address: encodeURIComponent(address),
			phone: encodeURIComponent(contact),
			payment_method: 'cod',
			products: cartProducts,
			purchaseType: purchaseType
			// "products": [{"id": 1, "qty": 4}, {"id": 2, "qty": 5}]
		};

		cartProducts.forEach((p) => {
			p.qty = p.size;
			p.id = p.product_id_id;
		});

		console.log(detail);
		console.log(cartProducts);

		await fetch('https://testecmr.herokuapp.com/order/addorder/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: authHeader()
			},
			body: JSON.stringify(detail)
		})
			.then((res) => res.json('url'))
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
	};

	return (
		<Container>
			<Grid container justify="space-around" alignItems="flex-start">
				<Grid item container sm={6}>
					{cartProducts.length > 0 ? (
						cartProducts.map((product) => <CheckoutItem key={product.id} cartProduct={product} />)
					) : (
						<h3>Your Shopping Cart is Empty</h3>
					)}

					<Grid container direction="column" spacing={2} style={{ marginTop: '10px' }}>
						<Grid item container spacing={6} justify="flex-end" alignItems="center">
							<Grid item>SubTotal</Grid>
							<Grid item>
								Rs.<span>{totalamt}</span>
							</Grid>
						</Grid>

						<Grid item container spacing={6} justify="flex-end" alignItems="center">
							<Grid item>Tax 5%</Grid>
							<Grid item>
								Rs.<span>{taxamt}</span>
							</Grid>
						</Grid>

						<Grid item container spacing={6} justify="flex-end" alignItems="center">
							<Grid item>Shipping</Grid>
							<Grid item>Free</Grid>
						</Grid>

						<Grid item container spacing={4} justify="flex-end" alignItems="center">
							<Grid item>
								<Typography variant="h5" color="primary">
									Total
								</Typography>
							</Grid>
							<Grid item>
								<Typography variant="h5" color="primary">
									Rs.<span>{grandTotal}</span>
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item container sm={4}>
					<ShippingDetails
						sendShippingDetails={(name, address, contact) => sendShippingDetails(name, address, contact)}
					/>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Checkout;

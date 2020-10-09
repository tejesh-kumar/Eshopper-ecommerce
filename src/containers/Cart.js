import React, {useState, useEffect, Fragment} from 'react'
import {Link} from 'react-router-dom'
import {Grid, Container, Button, Box, Typography} from '@material-ui/core'

import CartItem from './CartItem'
import authHeader from '../services/auth-header'
// import AuthService from "../services/auth.service";

function Cart({currentUser, products, cart, updateCart}) {
    const [cartProducts, setCartProducts] = useState([])
    const [totalamt, setTotalamt] = useState(0)
    const [taxamt, setTaxamt] = useState(0)
    const [grandTotal, setGrandTotal] = useState(0)

    let subTotal=0, tax, total;
    

    useEffect(() => {
        if(currentUser === undefined) {
            console.log(cart);
            const tempCartProducts = []
            const sessionProducts = cart;

            console.log('products', products);
            sessionProducts.forEach(sp => {
                products.forEach(p => {
                    if(sp.id === p.id) {
                        p.size = sp.qty;
                        p.product_id_id = p.id;
                        p.name = p.title;
                        p.image = p.imgUrl;
                        tempCartProducts.push(p);
                    }
                })
            })
            console.log(tempCartProducts)

            setCartProducts(tempCartProducts);
        }
        else {
            const getCartProducts = async () => {
                await fetch('https://testecmr.herokuapp.com/cart/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        // 'Authorization': '858f0d32c05f88b6375b0d8dbd36b2e10f518738'
                        // 'Authorization': TOKEN
                        'Authorization': authHeader()
                    }
                    // data: JSON.stringify({user_name: 'madhu'})
                })
                    .then(res => res.json())
                    // .then(data => console.log(data))
                    .then(data => setCartProducts(data))
                    // .then(data => calcTotal())
                    .catch(err => console.log(err));
            }
    
            getCartProducts();
        }
        

        // const calcTotal = () => {
        //     // total = 0, subTotal = 0, tax = 0;
        //     cartProducts.forEach((prod) => {
        //         subTotal = subTotal + (prod.size * prod.price)
        //     console.log(prod.size, prod.price);
        //     })
        //     tax = 5 / 100 * subTotal;
        //     total = subTotal + tax;
        //     console.log(subTotal);
        // }
        // calcTotal();


    }, [cart, products, currentUser]) 

    useEffect(() => {
        const calcTotal = () => {
            // total = 0, subTotal = 0, tax = 0;
            cartProducts.forEach((prod) => {
                subTotal = subTotal + (prod.size * prod.price)
            console.log(prod.size, prod.price);
            })
            tax = parseInt(5 / 100 * subTotal);
            total = parseInt(subTotal + tax);
            // console.log(subTotal, tax, total);
            setTotalamt(subTotal);
            setTaxamt(tax);
            setGrandTotal(total);

        }

        calcTotal();
    }, [cartProducts])


    

    return (
        <Container style={{marginBottom: '20px'}}>
            <Grid container>
                {
                    cartProducts.length > 0 ?
                        cartProducts.map(product => <CartItem key={product.id} cartProduct={product} updateCart={updateCart} />)
                         : <h3>Your Shopping Cart is Empty</h3>
                }
            </Grid>

            {
            cartProducts.length > 0 ?
            <Fragment>
            <Grid container direction="column" spacing={2} style={{marginTop: '10px'}}>
                <Grid item container spacing={6} justify="flex-end" alignItems="center">
                    <Grid item>SubTotal</Grid>
            <Grid item>Rs.<span>{totalamt}</span></Grid>
                </Grid>

                <Grid item container spacing={6} justify="flex-end" alignItems="center">
                    <Grid item>Tax 5%</Grid>
            <Grid item>Rs.<span>{taxamt}</span></Grid>
                </Grid>

                <Grid item container spacing={6} justify="flex-end" alignItems="center">
                    <Grid item>Shipping</Grid>
                    <Grid item>Free</Grid>
                </Grid>

                <Grid item container spacing={4} justify="flex-end" alignItems="center">
                    <Grid item><Typography variant="h5" color="primary">Total</Typography></Grid>
            <Grid item><Typography variant="h5" color="primary">Rs.<span>{grandTotal}</span></Typography></Grid>
                </Grid>
            </Grid>
            
            <Grid container justify="flex-end">
                <Box mt={4}>
                    <Link to={{ pathname: '/checkout/cart' }} style={{textDecoration: 'none'}}><Button variant="contained" color="primary">Proceed to checkout</Button></Link>
                </Box>
            </Grid>
            </Fragment> : null
        }
        </Container>
    )
}

export default Cart

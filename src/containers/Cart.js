import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Grid, Container, Button, Box} from '@material-ui/core'

import CartItem from './CartItem'
import authHeader from '../services/auth-header'

function Cart() {
    const [cartProducts, setCartProducts] = useState([])
    const [total, setTotal] = useState(0)
    const [grandTotal, setGrandTotal] = useState(0)

    // const TOKEN = JSON.parse(localStorage.getItem('loginDetail')).token;

    useEffect(() => {
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
                .catch(err => console.log(err));
        }

        getCartProducts();



        const sendToken = async () => {
            await fetch('https://testecmr.herokuapp.com/users/userprofile/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': '858f0d32c05f88b6375b0d8dbd36b2e10f51873'
                    'Authorization': authHeader()
                },
                // body: JSON.stringify({Token: '858f0d32c05f88b6375b0d8dbd36b2e10f518738'})
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.log(err));
        }

        // sendToken();
    }, []) 
    

    return (
        <Container style={{marginBottom: '20px'}}>
            <Grid container>
                {
                    cartProducts.length > 0 ?
                        cartProducts.map(product => <CartItem key={product.id} cartProduct={product} />)
                         : <h3>Your Shopping Cart is Empty</h3>
                }
            </Grid>
            
            <Grid container justify="flex-end">
                <Box mt={4}>
                    <Link to={{ pathname: '/checkout/cart' }} style={{textDecoration: 'none'}}><Button variant="contained" color="primary">Proceed to checkout</Button></Link>
                </Box>
            </Grid>
        </Container>
    )
}

export default Cart

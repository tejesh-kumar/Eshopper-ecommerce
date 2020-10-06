import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Grid, Container} from '@material-ui/core'

import CheckoutItem from './CheckoutItem'
import ShippingDetails from './ShippingDetails'
import authHeader from '../services/auth-header'

function Checkout({selectedProductToPurchase}) {
    const [cartProducts, setCartProducts] = useState([])
    const [total, setTotal] = useState(0)
    const [grandTotal, setGrandTotal] = useState(0)

    let { purchaseType } = useParams()

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

        const getBuyNowProduct = () => {
            let newData = selectedProductToPurchase.map((item) => {return {
                id: item.id,
                name: item.title,
                image: item.imgUrl,
                price: item.price, 
                size: item.quantity
            }
        })

        setCartProducts(newData)
    }

        if(purchaseType === 'cart') {
            getCartProducts();
        } 
        else {
            getBuyNowProduct();
        }

    }, [])

    return (
        <Container>
            <Grid container justify="space-around" alignItems="flex-start">
                <Grid item container sm={6}>
                    
                    {
                    cartProducts.length > 0 ?
                        cartProducts.map(product => <CheckoutItem key={product.id} cartProduct={product} />)
                         : <h3>Your Shopping Cart is Empty</h3>
                    }
                </Grid>
                <Grid item container sm={4}>
                    <ShippingDetails />
                </Grid>
            </Grid>

        </Container>
    )
}

export default Checkout

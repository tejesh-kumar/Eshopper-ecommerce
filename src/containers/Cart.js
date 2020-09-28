import React, {useState} from 'react'
import {Grid, Container} from '@material-ui/core'

import CartItem from './CartItem'

function Cart() {
    const [cartProducts, setCartProducts] = useState([])
    const [total, setTotal] = useState(0)
    const [grandTotal, setGrandTotal] = useState(0)

    const increaseQuantityPrice = () => {
        
    }

    return (
        <Container style={{marginBottom: '20px'}}>
            <Grid container>
                <CartItem />
                <CartItem />
                <CartItem />
            </Grid>
        </Container>
    )
}

export default Cart

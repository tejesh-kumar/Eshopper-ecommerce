import React from 'react'
import {Grid} from '@material-ui/core'

import Showcase from '../components/Header/Showcase'


<Route path={} component={Product}></Route>


function Product() {
    return (
        <Grid container direction="column">
            <Grid item container>
                <Showcase page='productDetail' />
            </Grid>
        </Grid>
    )
}

export default Product

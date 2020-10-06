import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from '@material-ui/core'

import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    buttonStyle: {
        color: 'white',
        borderRadius: 0
    }
}))



function OrangeButton({selectedProductToPurchaseHandler, productId, quantity}) {
    const classes = useStyles()

    return (
        <Link to={{ pathname: '/checkout/buynow/' }} style={{textDecoration: 'none'}}>
            <Button className={classes.buttonStyle} variant="contained" color="primary" onClick={() => selectedProductToPurchaseHandler(productId, quantity)}>BUY NOW</Button>
        </Link>
    )
}

export default OrangeButton

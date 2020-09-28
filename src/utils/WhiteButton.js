import React from 'react'
import { Button } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    buttonStyle: {
        fontSize: '14px',
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.text.primary,
        borderRadius: 0,
        letterSpacing: 0,
        padding: '6px 12px',
        textDecoration: 'capitalized',
        transition: '0.3s',

        '&:hover': {
            color: 'white',
            backgroundColor: theme.palette.primary.main
        }
    }
}))



function WhiteButton() {
    const classes = useStyles()

    return (
        <Button className={classes.buttonStyle} variant="contained" startIcon={<ShoppingCartIcon />}>Add to cart</Button>
    )
}

export default WhiteButton

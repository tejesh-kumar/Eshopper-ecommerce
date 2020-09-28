import React from 'react'
import {Grid, Typography, IconButton, Box} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import {makeStyles} from '@material-ui/styles'

import image from '../images/cart/one.png'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '20px 10px',
        border: `1px solid ${theme.palette.secondary.main}`
    },
    img: {
        height: '100px',
        
        '& img': {
            height: 'inherit',
            maxWidth: '100%',
        }
    },
    title: {
        fontSize: '20px'
    },
    quantity: {
        display: 'flex',
        alignItems: 'center',
    },
    total: {
        fontSize: '24px',
        color: theme.palette.text.orange
    }
}))

function CartItem() {
    const classes = useStyles()

    return (
        <Grid className={classes.root} item container justify="space-between" alignItems="center">
                <Grid item container alignItems="center" xs={12} sm={4} style={{marginBottom: '10px'}}>
              <div className={classes.img}>
                  <img src={image} alt="product-img"/>
              </div>
              <div className={classes.title}>
                  <Typography variant="h6" color="initial">Polo Black Shirt</Typography>
              </div>
            </Grid>
          
              <div className={classes.price}>
                  Rs.<span>485</span>
              </div>
              <div className={classes.quantity}>
                <IconButton aria-label=""><AddIcon /></IconButton>
				<Box mx={2}><Typography variant="h5">2</Typography></Box>
                <IconButton aria-label=""><RemoveIcon /></IconButton>
              </div>

          <div>
            <Typography variant="h4" className={classes.total}>
                Rs.<span>485</span>
            </Typography>
          </div>
        </Grid>
    )
}

export default CartItem

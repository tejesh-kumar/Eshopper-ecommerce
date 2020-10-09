import React from 'react'
import {Grid, Typography, IconButton, Box} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from '@material-ui/styles'

// import image from '../images/cart/one.png'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '20px',
        border: `1px solid ${theme.palette.secondary.main}`
    },
    img: {
        height: '60px',
        marginBottom: '15px',
        
        '& img': {
            height: 'inherit',
            maxWidth: '100%',
        }
    },
    title: {
        '& p': {
            fontSize: '14px',
            textAlign: 'center'
        }
    },
    quantity: {
        display: 'flex',
        alignItems: 'center',
    },
    deleteBtn: {
        '&:hover': {
            color: '#ff0000'
        }
    },
    total: {
        fontSize: '24px',
        color: theme.palette.text.orange
    }
}))

function CartItem({cartProduct, updateCart}) {
    const classes = useStyles()
    const { product_id_id, name, image, price, size } = cartProduct;
    const productTotal = parseInt(parseInt(price) * parseInt(size));


    return (
        <Grid className={classes.root} item container justify="space-between" alignItems="center">
                <Grid item container direction="column" justify="center" alignItems="center" xs={12} sm={3}>
              <Grid item container className={classes.img} justify="center">
                  <img src={image} alt="product-img"/>
              </Grid>
              <Grid item container justify="center" className={classes.title}>
                <Typography variant="body1" color="initial">{name}</Typography>
              </Grid>
            </Grid>
          
              <div className={classes.price}>
                Rs.<span>{price}</span>
              </div>
              <div className={classes.quantity}>
                <IconButton aria-label="" onClick={() => updateCart(product_id_id, 'add', 1)}><AddIcon /></IconButton>

                <Box mx={2}><Typography variant="h5">{size}</Typography></Box>
                <IconButton aria-label="" onClick={() => updateCart(product_id_id, 'subtract', 1)}><RemoveIcon /></IconButton>
              </div>

              <div>
              <IconButton aria-label="" onClick={() => updateCart(product_id_id, 'delete', 1)}><DeleteIcon className={classes.deleteBtn} /></IconButton>
              </div>

          <div>
            <Typography variant="h4" className={classes.total}>
                Rs.<span>{productTotal}</span>
            </Typography>
          </div>
        </Grid>
    )
}

export default CartItem

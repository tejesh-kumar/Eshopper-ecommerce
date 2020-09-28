import React from 'react'
import { Grid } from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

import ProductCard from '../../utils/ProductCard'

import Image from '../../images/home/gallery2.jpg'

const useStyles = makeStyles(theme => ({
    tab: {
        backgroundColor: theme.palette.tertiary.main,
        marginBottom: '40px',
        display: 'flex',
        flexDirection: 'column',
        color: theme.palette.text.tertiary,
        fontSize: '14px',
        textTransform: 'uppercase',

        [theme.breakpoints.up('md')]: {
            flexDirection: 'row'
        }
    },
    tabItem: {
        padding: '10px 15px',
        transition: '0.3s',
        cursor: 'pointer',
        
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: 'white'
        }
    }
}))


export default function TabItems() {
    const classes = useStyles()

    return (
        <div>
           <div className={classes.tab}>
               <div className={classes.tabItem}>Blazers</div> 
               <div className={classes.tabItem}>Blazers</div> 
               <div className={classes.tabItem}>Blazers</div> 
               <div className={classes.tabItem}>Blazers</div> 
               <div className={classes.tabItem}>Blazers</div> 
            </div> 
            <div>
                <Grid item container spacing={4}>
                <Grid item md={3} xs={6}><ProductCard img={Image}/></Grid>
                <Grid item md={3} xs={6}><ProductCard img={Image}/></Grid>
                <Grid item md={3} xs={6}><ProductCard img={Image}/></Grid>
                <Grid item md={3} xs={6}><ProductCard img={Image}/></Grid>
                </Grid>
            </div>
        </div>
    )
}

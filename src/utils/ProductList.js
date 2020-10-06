import React, {Fragment} from 'react'
import {Switch, Route, useRouteMatch, useParams, useLocation, Link} from 'react-router-dom'
import { Grid, Box } from '@material-ui/core'

import Heading from './Heading'
import ProductCard from './ProductCard'

import Image from '../images/home/product2.jpg'


function FeaturedItems({products, updateCart}) {

    console.log('products', products)
    const param = useParams();
    const location = useLocation();
    console.log(param);

    // let {path, url} = useRouteMatch();
    // console.log('path', path);
    // console.log('url', url);

    let title = 'Featured Items', modifiedProducts = products;

    if(location.pathname.includes('/category')) {      
        title = param.categoryId;

        modifiedProducts = products.filter(product => product.category === title);
        console.log(modifiedProducts);
    }

    if(location.pathname.includes('/brand')) {      
        title = param.brandId;

        modifiedProducts = products.filter(product => product.brand.toLowerCase() === title.toLowerCase());
        console.log(modifiedProducts);
    }

    if(location.pathname.includes('/search')) {
        const searchString = param.searchStr;

        title = `Search results for '${searchString}'`;       

        modifiedProducts = products.filter(product => product.title.toLowerCase().includes(searchString.toLowerCase()) === true);
        console.log(modifiedProducts);
    }

    // <Switch>
    //     <Route path='/shop'  />
    // </Switch>

    return (
        <Fragment>
        <Heading title={title} />
        <Grid item container spacing={2}>
                { 
                    products.length > 0 ?
                    (   
                        modifiedProducts.length > 0 ? 
                        (
                            modifiedProducts.map(item => (
                                <Grid item md={4} xs={6} key={item.id}>
                                    <Link to={`/product/${item.title}/${item.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                        <ProductCard img={Image} productInfo={item} updateCart={updateCart} />
                                    </Link>
                                </Grid>
                            ))
                        ) : <Grid item container justify="center" alignItems="center"><Box mt={5}><h3>No Products Found</h3></Box></Grid>
                    ) : null
                }
        </Grid>
        </Fragment>
    )
}

export default FeaturedItems


import React, {Fragment} from 'react'
import {Switch, Route, useRouteMatch, useParams, useLocation, Link} from 'react-router-dom'
import { Grid } from '@material-ui/core'

import Heading from './Heading'
import ProductCard from './ProductCard'

import Image from '../images/home/product2.jpg'


function FeaturedItems({products}) {

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
    // <Switch>
    //     <Route path='/shop'  />
    // </Switch>

    return (
        <Fragment>
        <Heading title={title} />
        <Grid item container spacing={4}>
                { 
                    products.length > 0 ?
                    (   
                        modifiedProducts.map(item => (
                            <Grid item md={4} key={item.id}>
                                <Link to={`/product/${item.title}/${item.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}><ProductCard img={Image} productInfo={item} /></Link>
                            </Grid>
                        ))
                    ) : null
                }
        </Grid>
        </Fragment>
    )
}

export default FeaturedItems


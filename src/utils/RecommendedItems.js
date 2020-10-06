import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import { Container, Grid } from '@material-ui/core'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Heading from './Heading'
import ProductCard from './ProductCard'

import Image from '../images/home/recommend3.jpg'


function RecommendedItems({products, updateCart}) {
    const modifiedProducts = products.reverse()
    // .splice(5);
    console.log('modifiedProducts', modifiedProducts);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ],
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />
      };

    return (
        <Fragment>
        <Heading title="Recommended Items" />
        {/* <Grid item container spacing={4}>
            <Grid item md={4}><ProductCard img={Image} /></Grid>
            <Grid item md={4}><ProductCard img={Image} /></Grid>
            <Grid item md={4}><ProductCard img={Image} /></Grid> 
            <Grid item md={4}><ProductCard img={Image} /></Grid>
        </Grid> */}
<Container maxWidth='lg'>

        <div>
            <Slider {...settings}>
                {/* <div><ProductCard img={Image} /></div>
                <div><ProductCard img={Image} /></div>
                <div><ProductCard img={Image} /></div>
                <div><ProductCard img={Image} /></div>
                <div><ProductCard img={Image} /></div>
                <div><ProductCard img={Image} /></div> */}

                { 
                    modifiedProducts.length > 0 ?
                    (   
                        products.map(item => (
                            // <Grid item md={4} sm={12} key={item.id}>
                            <div key={item.id}>
                                <Link to={`/product/${item.title}/${item.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                    <ProductCard productInfo={item} updateCart={updateCart} />
                                </Link>
                            </div>
                            // </Grid>
                        ))
                    ) : null
                }

            </Slider>
        </div>
        </Container>


        </Fragment>
    )
}

export default RecommendedItems


import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import Aux from '../hoc/Auxiliary';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Home from './Home/Home';
import Login from '../components/Login';
import Cart from '../containers/Cart';

function Layout() {
    const [ products, setProducts ] = useState([]);
    const [ categories, setCategories ] = useState([]);
    const [ brands, setBrands ] = useState([]);
    const [currentlyViewingProduct, setCurrentlyViewingProduct] = useState({});


	useEffect(() => {
		const fetchProducts = async () => {
            // await fetch('https://cfd7348e-6a50-40f0-8fb1-bbffec42d549.mock.pstmn.io/products')
            // await fetch('https://api.mockaroo.com/api/a9db3030?count=50&key=e72bd0b0')
            await fetch('https://testecmr.herokuapp.com/products/')
                .then((response) => response.json())
                .then((data) => {
                    let newData = data.map((item) => {return {
                        id: item.id,
                        title: item.name,
                        imgUrl: item.image,
                        price: item.price, 
                        category: item.category,
                        brand: item.brand,
                        availability: item.availability
                    }})
                    setProducts(newData)
                })
                .catch(err => console.log(err))
        };
        
        fetchProducts();

        const fetchCategories = async () => {
            // await fetch('https://cfd7348e-6a50-40f0-8fb1-bbffec42d549.mock.pstmn.io/categories')
            // await fetch('https://api.mockaroo.com/api/a9db3030?count=50&key=e72bd0b0')
            await fetch('https://testecmr.herokuapp.com/category/')
                .then((response) => response.json())
                .then((data) => {
                    let newData = data.map((item) => {return {id: item.id, category: item.name}})
                    console.log(newData);
                    setCategories(newData)
                })
        };
        
        fetchCategories();

        const fetchBrands = async () => {
            // await fetch('https://cfd7348e-6a50-40f0-8fb1-bbffec42d549.mock.pstmn.io/brands')
            await fetch('https://testecmr.herokuapp.com/brand/')
                .then((response) => response.json())
                .then((data) => {
                    let newData = data.map((item) => {return {id: item.id, brand: item.name}})
                    console.log(newData);
                    setBrands(newData)
                })
        };
        
        fetchBrands(); 

    }, []);
    
    console.log(categories);
    console.log(brands);


    const findCurrentViewingProductHandler = (selectedProductId) => {
        const matchedProduct = products.find(product => product.id === selectedProductId);
        setCurrentlyViewingProduct(matchedProduct);
    }


	return (
		<Aux>
			<Grid container direction="column">
				<Grid item container>
					<Header />
				</Grid>

				<Grid item container justify="center">
					<main style={{width: '100%'}}>
						<Switch>
							<Route path={'/login'} exact component={Login} />

                            <Route path={'/cart'} component={Cart} />

							<Route path={['/', '/shop']} render={() => ( 
                        <Home 
                        products={products} 
                        brands={brands} 
                        categories={categories} 
                        product={currentlyViewingProduct} 
                        productHandler={findCurrentViewingProductHandler} />
                            )} />
							
						</Switch>

					</main>
				</Grid>

				<Grid item container>
					<Footer />
				</Grid>
			</Grid>
		</Aux>
	);
}

export default Layout;

import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import Aux from '../hoc/Auxiliary';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Home from './Home/Home';
import Login from '../components/Login';
import Cart from '../containers/Cart';
import Checkout from '../containers/Checkout';
import AuthService from "../services/auth.service";
import ProtectedRoute from '../hoc/ProtectedRoute';
import authHeader from '../services/auth-header';

function Layout() {
    const [currentUser, setCurrentUser] = useState(undefined);
    const [ products, setProducts ] = useState([]);
    const [ categories, setCategories ] = useState([]);
    const [ brands, setBrands ] = useState([]);
    const [ tabCategory, setTabCategory ] = useState('');
    const [updateQty, setUpdateQty] = useState(1);
    const [cart, setCart] = useState([]);
    const [selectedProductToPurchase, setSelectedProductToPurchase] = useState({});
    const [searchString, setSearchString] = useState('');

    // const TOKEN = JSON.parse(localStorage.getItem('loginDetail')).token;


	useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
        }

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
                    setCategories(newData);
                    setTabCategory(newData[0].category);
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

    const incrementQtyHandler = () => {
        let tempQty = updateQty
        tempQty = tempQty + 1;
        setUpdateQty(tempQty);
    }
    
    const decrementQtyHandler = () => {
        let tempQty = updateQty

        if(tempQty > 1) {   
            tempQty = tempQty - 1;
            setUpdateQty(tempQty);
        }
    }

    const updateCart = async (id, actionType = 'add', qty = 1) => {
        // e.stopPropogation();
        console.log('id', id);
        // const tempCart = [...cart];
        let tempCart = {};
        console.log('cart', tempCart);

        tempCart = {id: id, actionType: actionType, qty: qty}

        // const matchingProd = tempCart.find(prod => id === prod.id);
        // const matchIndex = tempCart.findIndex(prod => id === prod.id);

        // if(actionType === 'delete') {
            // tempCart.splice(matchIndex, 1);
        // }
        // else {
        //     if(matchingProd) {
        //         if(actionType === 'add') {
        //             matchingProd.qty = matchingProd.qty + 1;
        //         } 
        //         else if(actionType === 'subtract') {
        //             matchingProd.qty = matchingProd.qty - 1;
        //         }
    
        //         tempCart[matchIndex] = matchingProd;
        //     }
        //     else {
        //         tempCart.push({id: id, qty: 1});
        //     }
        // }

        

        console.log('tempCart', tempCart);
        // Updating Cart on backend
        await fetch('https://testecmr.herokuapp.com/cart/addcart/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authHeader()
                    // 'Authorization': '858f0d32c05f88b6375b0d8dbd36b2e10f518738'
                    // 'Authorization': TOKEN
                },
                body: JSON.stringify(tempCart)
            })
                .then(res => res.json())
                .then(data => console.log(data))
                // .then(data => setCartProducts(data))
                .catch(err => console.log(err));

        setCart(tempCart);
    }


    const selectedProductToPurchaseHandler = (id, qty) => {
        const product = products.find(pr => pr.id === id)
        console.log('purchaseProduct', id, product, qty)
        product.quantity = qty
        setSelectedProductToPurchase([product])
    }


    const tabCategoryHandler = (tabCat) => {
        setTabCategory(tabCat);
    }

    const searchHandler = (searchStr) => {
        setSearchString(searchStr)
    }

    
	const incrementQtyHandlerCart = (id) => {
        console.log('id', id);
        const tempCart = [...cart];
        const matchingProd = tempCart.find(prod => id === prod.id);

        if(matchingProd) {
            matchingProd.qty = matchingProd.qty + 1;
            const matchIndex = tempCart.findIndex(prod => id === prod.id);
            tempCart[matchIndex] = matchingProd;
        }
        else {
            tempCart.push({id: id, qty: 2});
        }

        setCart(tempCart);
    };

    const decrementQtyHandlerCart = (id) => {
        console.log('id', id);
        const tempCart = [...cart];
        const matchingProd = tempCart.find(prod => id === prod.id);

        if(matchingProd) {
            matchingProd.qty = matchingProd.qty - 1;
            const matchIndex = tempCart.findIndex(prod => id === prod.id);
            tempCart[matchIndex] = matchingProd;
        }
        else {
            tempCart.push({id: id, qty: 2});
        }

        setCart(tempCart);
    };
    
    console.log(cart);


    const logout = () => {
        AuthService.logout();
        setCurrentUser(undefined);
      };

    // const findCurrentViewingProductHandler = (selectedProductId) => {
    //     const matchedProduct = products.find(product => product.id === selectedProductId);
    //     setCurrentlyViewingProduct(matchedProduct);
    // }


	return (
		<Aux>
			<Grid container direction="column">
				<Grid item container>
					<Header logout={logout} 
                        searchHandler={(searchStr) => searchHandler(searchStr)} />
				</Grid>

				<Grid item container justify="center">
					<main style={{width: '100%', minHeight: '40vh'}}>
						<Switch>
							<ProtectedRoute path={'/login'} currentUser={currentUser} component={Login} />

                            <Route path={'/cart'} render={() => (
                                <Cart cart={cart} updateCart={(id, actionType) => updateCart(id, actionType)} />
                            )} />

                            <Route path={'/checkout/:purchaseType'} render={() => (
                                <Checkout cart={cart} selectedProductToPurchase={selectedProductToPurchase} />
                            )} />

                            {/* <Route path={'/checkout/buynow'} render={() => (
                                <Checkout cart={selectedProductToPurchase} />
                            )} /> */}

							<Route path={['/', '/shop']} render={() => ( 
                        <Home 
                        products={products} 
                        brands={brands} 
                        categories={categories}
                        tabCategory={tabCategory} 
                        quantity={updateQty}
                        searchString={searchString}
                        incrementQtyHandler={incrementQtyHandler}
                        decrementQtyHandler={decrementQtyHandler}
                        updateCart={(id) => updateCart(id)}
                        selectedProductToPurchaseHandler={(id, qty) => selectedProductToPurchaseHandler(id, qty)}
                        tabCategoryHandler={(tabCat) => tabCategoryHandler(tabCat)}
                         />
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

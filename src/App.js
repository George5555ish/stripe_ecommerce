import React, {useState, useEffect} from "react";
import {commerce} from './lib/commerce';
import {CircularProgress} from '@material-ui/core';

import Gsap from "./components/GsapSlider/Gsap";
import OwlCarouselSlider from "./components/OwlCarouselSlider";
// import Products from './components/Products/Products';
// import Navbar from '.components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Products, Navbar, Cart, Checkout} from './components';




import "./index.css";
import SingleProduct from "./components/SingleProduct/SingleProduct";

const App = () => {




  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({})
  const [errorMessage, setErrorMessage] = useState('');
  const [currentProduct, setCurrentProduct] = useState({});
  const [showNavbar, setShowNavbar] = useState(false);


  const fetchProducts = async () => {
    const {data} = await commerce.products.list();

    setProducts(data);
    fetchCart();

    
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const onAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);

    // alert("This is the productid " + productId + quantity);
  
 }

 const handleUpdateCartQty = async (productId, quantity) => {
  const item = await commerce.cart.update(productId, {quantity});

  setCart(item.cart);
 
}

const handleRemoveFromCart = async (productId) => {
  const item = await commerce.cart.remove(productId);

  setCart(item.cart);

}
const handleEmptyCart = async () => {
  const item = await commerce.cart.empty();

  setCart(item.cart);

}

const refreshCart = async () => {
  const newCart = await commerce.cart.refresh();

  setCart(newCart);
}

const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {

  try {
     const order = await commerce.checkout.capture(checkoutTokenId, newOrder);
    setOrder(order);
    refreshCart();

  } catch (error) {
    setErrorMessage(error.data.error.message);
  }
}


// For Single Project

const handleSingleProduct = (productItem) => {

  setCurrentProduct(productItem)
  console.log(productItem);

}
  window.onscroll = function () { 
      
      if (document.body.scrollTop >= 300 || document.documentElement.scrollTop >= 300 )
{
  setShowNavbar(true);
      } 
      else {
        setShowNavbar(false);
      }
  }
  useEffect(() => {

  
    fetchProducts();
  }, []);


  return (
  <Router>
      <div>
      
        <Navbar totalItems={cart.total_items} showNavbar={showNavbar}/>
       <Switch>
       <Route exact path="/">
          <Gsap />
          {
            products !== [] ? <Products products={products} onAddToCart={onAddToCart} handleSingleProduct={handleSingleProduct}/>
              : <CircularProgress />
          }
        </Route>

        <Route  exact path="/cart">
           <Cart cart={cart}

handleUpdateCartQty={handleUpdateCartQty}
handleRemoveFromCart={handleRemoveFromCart}
handleEmptyCart={handleEmptyCart}
           />
        </Route>

        <Route exact path="/checkout">
            <Checkout cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
        </Route>

        <Route path="/singleproduct">
          <SingleProduct products={products} currentProduct={currentProduct} onAddToCart={onAddToCart}/>
        </Route>
       </Switch>
      

     







      {/* <footer className="footer-div">
    
          <OwlCarouselSlider />
      </footer> */}
    </div>
  </Router>
  );
};

export default App;

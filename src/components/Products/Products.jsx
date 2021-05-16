import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';

import useStyles from './styles';


const Products = ({products, onAddToCart, handleSingleProduct}) => {

    const classes = useStyles();

    const handleClick =(productItem) => {
        handleSingleProduct(productItem)
    }
    // const productItems = [
    //     {id: 1, name: 'Shoes', description: 'Running Shoes.', price:"$5"},
    //     {id: 2, name: 'MacBook', description: 'Apple macbook.', price:"$10"}, 
    //     {id: 3, name: 'Phone', description: 'Samsung Phone.', price:"$50"},
    //     {id: 4, name: 'Tablet', description: 'Galaxy Tablet', price:"$220"}


    // ]
    return (
        <main  className={classes.content}>
        <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={2}>
                {
                    products.map((productItem) => {
                      return  (<Grid key={productItem.id} xs={12} sm={6} md={4} lg={3} item onClick={() => handleClick(productItem)}>
                        <Product productItem={productItem} onAddToCart={onAddToCart}/>
                        </Grid>)
                    })
                }
            </Grid>

        </main>
    )
}

export default Products;
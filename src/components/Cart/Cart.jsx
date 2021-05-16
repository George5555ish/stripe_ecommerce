import React from 'react';
import {Container, Typography, Grid, Button} from '@material-ui/core';
import CartItem from '../Cart/CartItem/CartItem';
import {Link} from 'react-router-dom'
import useStyles from './styles';
const Cart = ({cart, handleEmptyCart, handleUpdateCartQty,
    handleRemoveFromCart}) => {


    const classes = useStyles();
    const EmptyCart = () => {
        return (
            <Typography variant="subtitle1">
                No Items in shopping cart. 
                <Link to="/" className={classes.link}>Add some!</Link>
            </Typography>
        )
    }

    const FilledCart = () => {


        return (
            <>
            <Grid container spacing={3}>
              {
                  cart.line_items.map((lineItem) => {
                     
                     return(
                        <Grid item xs={12} sm={4} key={lineItem.id}>
                            <CartItem lineItem={lineItem} 
                                handleUpdateCartQty={handleUpdateCartQty}
                                handleRemoveFromCart={handleRemoveFromCart}
                            />
                           {/* {lineItem.name} */}
                          </Grid>
                     )
                  })
              }

            
            </Grid>

            <div className={classes.cardDetails}>
              <Typography variant="h4">
              Subtotal: {cart.subtotal.formatted_with_symbol}
              </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                    <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Check Out</Button>

                    </div>
            </div>
            </>
        )
    }

    if (cart.line_items === undefined) return('Loading..');
    return (
        <Container>
            <div className={classes.toolbar}/>
            <Typography variant="h3" gutterBottom>Shopping Cart</Typography>
            {!cart.line_items.length ? <EmptyCart/> : <FilledCart />}
        </Container>
    )
}

export default Cart;

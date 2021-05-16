import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import mainImg from '../../screens/images/1.jpg';
import {ShoppingCart} from '@material-ui/icons';
import {Link, useLocation} from 'react-router-dom';
import useStyles from './styles';

const Navbar = ({totalItems, showNavbar}) => {


    const classes = useStyles();
    const location = useLocation();

    
    return (
        <>
           <AppBar position="fixed" className={(showNavbar || location.pathname !== '/') ? classes.appBar : classes.hideNav} color="inherit">
               <Toolbar>

               <div>
                                    <Typography className={classes.flexSide} component={Link} to="/" >
                                    <img src={mainImg} alt="Commerce.js" height="25px" width="25px" className={classes.image} />
                                    Zota Commerce
                                </Typography>
                   
               </div>
                  

                   <div className={classes.grow} />

                   {location.pathname !== '/cart'
                   &&  <div className={classes.button}>

{/* <Link ></Link> */}
<IconButton component={Link} to="/cart" aria-label="Show Cart">
    <Badge badgeContent={totalItems} color="secondary">
    <ShoppingCart />
    </Badge>

</IconButton>
</div>}
                  
               </Toolbar>
           </AppBar>
        </>
    )
}

export default Navbar

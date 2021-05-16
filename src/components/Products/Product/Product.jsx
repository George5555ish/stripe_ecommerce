import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import useStyles from './styles';

const Product = ({productItem, onAddToCart}) => {

    const classes = useStyles();

  
    // console.log(productItem);
   
    return (


        <Card className={classes.root} component={Link} to="/singleproduct">
            <CardMedia className={classes.media} image={productItem.media.source} title={productItem.name} />
            <CardContent>
                <div className={classes.container}>
                    <Typography variant="h5" gutterBottom>
                        {productItem.name}
                    </Typography>

                    <Typography variant="h5">
                        {productItem.price.formatted_with_symbol}
                    </Typography>
                </div>

                <Typography dangerouslySetInnerHTML={{__html:productItem.description}} variant="h2" color="textSecondary" className={classes.description} />
            </CardContent>

            <CardActions disabledSpacing className={classes.cardActions} component={Link} to="/singleproduct">
                <IconButton onClick={() => onAddToCart(productItem.id, 1)} aria-label="add-to-cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
      
    )
}

export default Product

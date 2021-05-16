import React from "react";
import {
  Paper,
  Grid,
  Typography,
  CircularProgress,
  Divider,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
} from "@material-ui/core";
import {AddShoppingCart} from '@material-ui/icons';
import useStyles from "./styles";

const SingleProduct = ({ currentProduct , onAddToCart}) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.toolbar} />
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={currentProduct.media.source}
          title={currentProduct.name}
        />
        <CardContent>
          <div className={classes.container}>
            <Typography variant="h5" gutterBottom>
              {currentProduct.name}
            </Typography>


            <CardActions className={classes.cardActions}>
      
                <IconButton onClick={() => onAddToCart(currentProduct.id, 1)} aria-label="add-to-cart">

                    <AddShoppingCart />
                    <Button className={classes.button}>Add To Cart</Button>
                </IconButton>
            </CardActions>
         
            <Typography variant="h5">
              {currentProduct.price.formatted_with_symbol}
            </Typography>
          </div>

          <Typography
            dangerouslySetInnerHTML={{ __html: currentProduct.description }}
            variant="h2"
            color="textSecondary"
            className={classes.description}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default SingleProduct;

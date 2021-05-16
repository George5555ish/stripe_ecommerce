import React from 'react'
import { Typography, Card, CardActions, CardContent, CardMedia, Button} from '@material-ui/core';

import useStyles from './styles';
const CartlineItem = ({lineItem, handleUpdateCartQty
    ,handleRemoveFromCart}) => {

    const classes = useStyles();


    return (
        <Card>
            <CardMedia image={lineItem.media.source} alt={lineItem.name} className={classes.media}/>
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{lineItem.name}</Typography>
                <Typography variant="p">{lineItem.line_total.formatted_with_symbol}</Typography>
            </CardContent>

            <CardActions className={classes.cartActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => handleUpdateCartQty(lineItem.id, lineItem.quantity - 1)}>-</Button>
                    <Typography variant="h4">{lineItem.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => handleUpdateCartQty(lineItem.id, lineItem.quantity + 1)}>+</Button>
                </div>
                <Button type="button" variant="contained" color="secondary" onClick={() =>handleRemoveFromCart(lineItem.id)}>Remove</Button>

            </CardActions>

            
        </Card>
    )
}

export default CartlineItem;

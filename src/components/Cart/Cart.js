import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";

import useStyles from "./styles";

const Cart = ({ cart }) => {
  const isEmpty = !cart.line_items.length;
  const classes = useStyles();

  const EmptyCart = () => {
    <Typography variant="subtitle1">
      You have no items in your shopping cart, start adding some!
    </Typography>;
  };
  const FilledCart = () => {
    <>
      <Grid container spaCing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <div>{item.name}</div>
          </Grid>
        ))}
        <Grid>
          <div>
            <Typography variant="h4">
              Subtotal: {cart.subtotal.formatted_with_symbol}
            </Typography>

            <div className={classes.cartDetails}>
              <Button
                className={classes.emptyButton}
                size="large"
                type="button"
                variant="contianed"
                color="secondary"
              >
                Empty Cart
              </Button>
              <Button
                className={classes.checkoutButton}
                size="large"
                type="button"
                variant="contianed"
                color="primary"
              >
                Checkout
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </>;
  };
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3">
        Your Shopping Cart
      </Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;

import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";

import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running Shoes",
    price: "$5",
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/03/11/12/best-mens-running-shoes-2020-indybest.jpg",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple macbook",
    price: "$10",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011?wid=892&hei=820&&qlt=80&.v=1603406905000",
  },
];

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

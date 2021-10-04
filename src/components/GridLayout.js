import React from 'react'

import { Grid, makeStyles, Typography } from '@material-ui/core'
import { MainGridItem } from './MainGridItem';
import { CustomCard } from './CustomCard';

import products from '../mocks/products';


const useStyles = makeStyles(()=>({
  mainGridItem: {
    backgroundColor: 'blue',
  },
  secondRowFirstItem: {
    backgroundColor: 'red',
  },
  secondRowSecondItem: {
    backgroundColor: 'green',
  },
  secondRowThirdItem: {
    backgroundColor: 'yellow',
  },
}));

export const GridLayout = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item lg={12} sm={12} xs={12}>
        <MainGridItem />
      </Grid>
      {products.map(product => (
        <Grid item sm={6} xs={12}>
          <CustomCard 
            title={product.title}
            subtitle={product.subtitle}
            description={product.description}
            image={{
              url: product.image.url,
              altText: product.image.altText
            }}/>
        </Grid>
      ))}
      <Grid item xs={4} sm={4} >
        <Typography className={classes.secondRowThirdItem}>Second row, third item</Typography>
      </Grid>
    </Grid>
  )
}

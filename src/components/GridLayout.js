import React from 'react'

import { Grid } from '@material-ui/core'
import { MainGridItem } from './MainGridItem';
import { CustomCard } from './CustomCard';

import products from '../mocks/products';

export const GridLayout = () => {

  return (
    <Grid container spacing={3}>
      <Grid item lg={12} sm={12} xs={12}>
        <MainGridItem />
      </Grid>
      {products.slice(0,2).map(product => (
        <Grid item md={6} sm={12} xs={12} key={product.title}>
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
      {products.slice(2).map(product => (
        <Grid item md={4} sm={6} xs={12} key={product.title}>
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
    </Grid>
  )
}

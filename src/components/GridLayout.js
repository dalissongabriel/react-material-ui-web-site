import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import { MainGridItem } from './MainGridItem';
import { CustomCard } from './CustomCard';

const useStyles = makeStyles((theme)=>({
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
      <Grid item sm={6} xs={12}>
        <CustomCard 
          title="Excel Masterclass"
          subtitle="Recommended for you"
          description="In this 6-leve eDegree, you'll learn how to use Excel from the very basics all the way to VBA programming and machine learning. You'll also learn web automation, Python and Selenium."
          image={{
            url: "https://cdn.pixabay.com/photo/2015/09/05/22/46/business-925900_1280.jpg",
            altText: "Excel Masterclass"
          }}/>

      </Grid>
      <Grid item sm={6} xs={12}>
        <CustomCard 
            title="Excel Masterclass"
            subtitle="Recommended for you"
            description="In this 6-leve eDegree, you'll learn how to use Excel from the very basics all the way to VBA programming and machine learning. You'll also learn web automation, Python and Selenium."
            image={{
              url: "https://cdn.pixabay.com/photo/2015/09/05/22/46/business-925900_1280.jpg",
              altText: "Excel Masterclass"
            }}/>
      </Grid>
      <Grid item xs={4} sm={4} >
        <Typography className={classes.secondRowThirdItem}>Second row, third item</Typography>
      </Grid>
    </Grid>
  )
}

import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'

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
        <Typography className={classes.mainGridItem}>Main grid item</Typography>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Typography className={classes.secondRowFirstItem}>Second row, first item</Typography>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Typography className={classes.secondRowSecondItem}>Second row, second item</Typography>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Typography className={classes.secondRowThirdItem}>Second row, third item</Typography>
      </Grid>
    </Grid>
  )
}

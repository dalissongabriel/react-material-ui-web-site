import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme)=>({
  mainContainer: {
    height: 400,
    backgroundImage: 'url(https://cdn.pixabay.com/photo/2020/12/18/16/56/laptop-5842509_1280.jpg)',
    color: theme.palette.common.white,
  },
  mainItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(6),
    textAlign: 'left',
  }
}));

export const MainGridItem = () => {
  const classes =  useStyles();

  return (
    <Grid container className={classes.mainContainer}>
      <Grid item className={classes.mainItem} md={6}>
        <Typography component='h2' variant="h4">Hello Coding</Typography>
        <Typography variant="body1" paragraph>Do you want to learn to code? Smash your career goals. Build websites, games, apss, and artificial intelligence project in 99 days. </Typography>
      </Grid>
    </Grid>
  )
}

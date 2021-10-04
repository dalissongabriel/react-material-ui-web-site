import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, makeStyles, Typography } from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons';
import React from 'react'

const useStyles = makeStyles((theme)=>({
  cardImage: {
    height: 300,
  }
}))

export const GridItem = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        title="Excel Masterclass"
        subheader="Recommended for you"/>
      <CardMedia 
        className={classes.cardImage}
        image="https://cdn.pixabay.com/photo/2015/09/05/22/46/business-925900_1280.jpg"
        title="Excel Masterclass"/>
      <CardContent>
        <Typography>
          In this 6-leve eDegree, you'll learn how to use Excel from the very basics all the way to VBA programming and machine learning. You'll also learn web automation, Python and Selenium. 
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="Visit page">
          <ArrowForward />
        </IconButton>
      </CardActions>
    </Card>
  )
}


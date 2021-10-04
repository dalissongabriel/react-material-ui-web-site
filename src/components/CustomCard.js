import React from 'react'

import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, makeStyles, Typography } from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons';

const useStyles = makeStyles(()=>({
  cardImage: {
    height: 300,
  }
}))

export const CustomCard = ({
  title,
  subtitle,
  description,
  image,
}) => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        title={title}
        subheader={subtitle}/>
      <CardMedia 
        className={classes.cardImage}
        image={image.url}
        title={image.altText}/>
      <CardContent>
        <Typography>
          {description}
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


import React from 'react'
import { Box, Container, Link, makeStyles, Toolbar, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
    }
  },
  siteTitle: {
    fontWeight: 'bold',
    letterSpacing: '1.5'
  },
  menuBox: {
    display: 'flex',
    flexDirection: 'column', 
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row'
    }
  },
  menuOption: {
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(10),
    }
  },
}));

export const NavBar = () => {

  const classes = useStyles();
  
  return (
    <Container> 
      <Toolbar className={classes.toolbar}>
        <Typography 
          component='h1'
          variant='h4'
          className={classes.siteTitle}>Mammoth Interactive</Typography>
        <Box className={classes.menuBox}>
          {['home', 'courses', 'sign-up'].map( (menuOptions, index) => (
              <Link
                key={index}
                component="button"
                variant="body1"
                className={classes.menuOption}>
                  {menuOptions.toUpperCase()}
              </Link>
          ))}
        </Box>
      </Toolbar>
    </Container>
  )
}

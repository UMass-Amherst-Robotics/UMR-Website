import React from 'react';
import Navbar from './../Components/navbar'
import Footer from '../Components/Footer/footer'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 875,
      lg: 1280,
      xl: 1920
    }
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 50,
    width: '50%',
    maxWidth: '800px',
    margin: 'auto',
  },
  title:{
    fontWeight: 'bold',
    fontSize: 60,
    textAlign: 'left',
    color: '#9A1E1E',
    marginBottom: 20,
  },

  text:{
    fontSize: '1.75rem',
    textAlign: 'left'
  },
  footer: {
    position: "absolute",
    width: "100%",
    bottom: 0
  },
}));

export default function(){
  const classes = useStyles();

  return(
    <body style={{margin: "0"}}>
      <div>
        <Navbar/>
          <div className={classes.root}>
            <Typography className={classes.title} variant = "h1" gutterBottom>Confirmation</Typography>
            <Typography className={classes.text} variant='h5' gutterBottom>Thank you for your interest with UMass Robotics. We have received your application. Please check your email for confirmation and follow the instructions.</Typography>
          </div>
        <Box className={classes.footer}>
          <Footer/>
        </Box>
      </div>
    </body>
  )
}

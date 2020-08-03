import React from 'react';
import Navbar from './../Components/navbar.js'
import Body from './../Components/body.js'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 50,
    width: '40%',
    marginLeft: '30%',
    marginRight: '30%',
  },
  form: {
    
  },
  title:{
    fontWeight: 'bold',
    fontSize: 60,
    textAlign: 'left',
    color: '#9A1E1E',
  },
  textField: {
    margin: 0,
  },
  margin: {
    '& .MuiTextField-root': {
      margin: '1%',
      width: '48%',
    },
  }
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <body style={{margin: "0"}}>
      <div>
        <Navbar/>
          <div className={classes.root}>
            <Typography className={classes.title} variant = "h1" gutterBottom>Contact</Typography>
            <form className={classes.margin} noValidate autoComplete="off">
              <div>
                <TextField className={classes.textField} id="standard-full-width" label="First Name" />
                <TextField fullWidth className={classes.textField} id="standard-full-width" label="Last Name" />
              </div>
            </form>
        </div>
      </div>
    </body>
  )
}

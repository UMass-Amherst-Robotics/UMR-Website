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
    padding: 40,
    flexGrow: 1,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 60,
    textAlign: 'left',
    color: '#9A1E1E',
  },
  textField: {
    width: '25ch',
  },
  margin: {
    margin: theme.spacing(1),
  }
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <body style={{margin: "0"}}>
      <div>
        <Navbar/>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <div className={classes.root}>
            <Grid item xs>
              <Typography className={classes.title} variant = "h1" gutterBottom>Contact</Typography>
            </Grid>
            <Grid item xs>
              <form className={classes.root} noValidate autoComplete="off">
                <FormControl fullWidth className={classes.margin}>
                  <TextField className={classes.textField} id="standard-basic" label="Standard" />
                </FormControl>
              </form>
            </Grid>
          </div>
        </Grid>
      </div>
    </body>
  )
}

import React from 'react';
import Navbar from './../Components/navbar.js'
import Body from './../Components/home/body.js'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

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

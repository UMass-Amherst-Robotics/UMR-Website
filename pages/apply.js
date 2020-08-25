import React from 'react';
import Navbar from './../Components/navbar.js'
import Body from './../Components/body.js'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    flexGrow: 1,

  },
  title:{
    fontWeight: 'bold',
    fontSize: 60,
    textAlign: 'left',
    color: '#9A1E1E',
  },
  subTitle:{
    fontSize: 20,
    textAlign: 'left'
  },
  questions: {
    fontSize: 18
  },
  textField: {
    width: '100ch',
    paddingBottom: '30px',
  },
  button: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    padding: 15,
    backgroundColor: '#312927',
    color: '#FFFFFF',
    width: '30ch',
    
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
              <Typography className={classes.title} variant = "h1" gutterBottom>Apply</Typography>
              <Typography className={classes.subTitle} variant = "h5" gutterBottom>
              Please respond to the following questions in complete sentences
              and make sure to inculde any details you believe we should know
              about you. The answers you provide will have no direct effect on
              your possible acceptance to UMASS Robotics.</Typography>
            </Grid>
            <Grid item xs>
              <form className={classes.root} noValidate autoComplete="off">
                <FormControl fullWidth className={classes.margin}>
                  <Typography className={classes.questions} variant = "h5" gutterBottom>
                  Why do you want to join this team? What are some of the
                  reasons you are interested in robotics?</Typography>
                  <TextField className={classes.textField} id="standard-multiline-flexible" multiline/>
                  <Typography className={classes.questions} variant = "h5" gutterBottom>
                  How do you work in a team? Would you rather work in a larger
                  or small group.</Typography>
                  <TextField className={classes.textField} id="standard-multiline-flexible" multiline/>
                  <Typography className={classes.questions} variant = "h5" gutterBottom>
                  What skills do you think you could bring to this team? (These
                  skills do not have to be robotics related)</Typography>
                  <TextField className={classes.textField} id="standard-multiline-flexible" multiline/>
                  <Typography className={classes.questions} variant = "h5" gutterBottom>
                  How did you hear about the UMASS Robotics team?</Typography>
                  <TextField className={classes.textField} id="standard-multiline-flexible" multiline/>
                  <Button className={classes.button} variant='contained' >
                  Submit Application
                  </Button>
                </FormControl>
              </form>
            </Grid>
          </div>
        </Grid>
      </div>
    </body>
  )
}

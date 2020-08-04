import React from 'react';
import Navbar from './../Components/navbar.js'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../Components/Footer/footer.js'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 50,
    width: '40%',
    marginLeft: '30%',
    marginRight: '30%',
  },
  button:{
    marginLeft: '42%',
    marginBottom: 50,
    padding: 15,  
    backgroundColor: '#312927',
    color: '#FFFFFF',
  },
  title:{
    fontWeight: 'bold',
    fontSize: 60,
    textAlign: 'left',
    color: '#9A1E1E',
    marginBottom: 50,
  },
  textField: {
    marginBottom: 50,
  },
  margin: {
    '& .MuiTextField-root': {
      width: '48%',
      marginRight: '1%',
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
            <form noValidate autoComplete="off">
              <div className={classes.margin}>
                <TextField className={classes.textField} id="standard-full-width" label="First Name" />
                <TextField fullWidth className={classes.textField} id="standard-full-width" label="Last Name" />
              </div>
              <TextField
                id="standard-full-width"
                className={classes.textField}
                label="Email"
                fullWidth
                color='green'
              />
              <TextField
                id="standard-full-width"
                className={classes.textField}
                label="Subject"
                fullWidth
              />
              <TextField
                id="standard-full-width"
                className={classes.textField}
                label="Message"
                fullWidth
              />
            </form>
            <Button className={classes.button} variant="contained"> 
              Submit
            </Button>
        </div>
        <Footer />
      </div>
    </body>
  )
}








let names = ["Mike", "Sam", "Guti"];

let descriptions = ["sdsdsdsds", "description 2", "this list is number 3"]

let listOne = [ {name: "Mike", description: "description 1"}, 
                {name: "Sam", description: "description 2"}, 
                {name: "Guti", description: "desription 3"}]
import React, { useState } from 'react';
import Navbar from './../Components/navbar.js'
import Body from './../Components/home/body.js'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 50,
    width: '80%',
    margin: 'auto',
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
    paddingBottom: '30px',
    width: '100%',
    maxWidth: '800px'
  },
  button: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    padding: 15,
    backgroundColor: '#312927',
    color: '#FFFFFF',
    width: '30ch',
  },
  form:{
    paddingTop: 50,
    margin: 'auto',
  },
  box:{
    width: '90%'

  },
  margin: {
    '& .MuiTextField-root': {

      marginRight: '1%',
    },
  }
}));

export default function Apply() {
  const classes = useStyles();
  const [application, setApplication] = useState({fName: '' , lName: '', email: '', q1: '', q2: '', q3: '', q4: '', q5: ''})

  // Description: Function that will make post request to server with contact information to then be exported to the umassrobotics email address.
  async function submitEmail(data){
      const json = JSON.stringify(data);
      const res = await axios.post('http://127.0.0.1:5000/data/', json, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      });
  }
  return (
    <body style={{margin: "0"}}>
      <div>
        <Navbar/>

          <div className={classes.root}>

              <Typography className={classes.title} variant = "h1" gutterBottom>Apply</Typography>
              <Typography className={classes.subTitle} variant = "h5" gutterBottom>
              Please respond to the following questions in complete sentences
              and make sure to inculde any details you believe we should know
              about you. The answers you provide will have no direct effect on
              your possible acceptance to UMASS Robotics. (Please write about a paragraph per response)</Typography>

              <form className = {classes.form} noValidate autoComplete="off">
                 <FormControl fullWidth className={classes.margin}>


                  <Typography className={classes.questions} variant = "h5" gutterBottom>
                  First Name</Typography>
                  <TextField className={classes.textField} id="standard-multiline-flexible"
                  onChange={(e) => {setContent({fName: e.target.value, lName: application.lName, email: application.email, q1: application.q1, q2: application.q2, q3: application.q3, q4: application.q4, q5: application.q5})}}
                  multiline/>


                 <Typography className={classes.questions} variant = "h5" gutterBottom>
                  Last Name</Typography>
                  <TextField className={classes.textField} id="standard-multiline-flexible"
                  onChange={(e) => {setContent({fName: application.fName, lName:  e.target.value, email: application.email, q1: application.q1, q2: application.q2, q3: application.q3, q4: application.q4, q5: application.q5})}}
                  multiline/>


                  <Typography className={classes.questions} variant = "h5" gutterBottom>
                  Email</Typography>
                  <TextField className={classes.textField} id="standard-multiline-flexible"
                  onChange={(e) => {setContent({fName: application.fName, lName: application.lName, email:  e.target.value, q1: application.q1, q2: application.q2, q3: application.q3, q4: application.q4, q5: application.q5})}}
                  multiline
                  />



                  <Typography className={classes.questions} variant = "h5" gutterBottom>
                  Why do you want to join this team? What are some of the
                  reasons you are interested in robotics?</Typography>
                  <TextField className={classes.textField} id="standard-multiline-flexible"
                  onChange={(e) => {setContent({fName: application.fName, lName: application.lName, email: application.email, q1:  e.target.value1, q2: application.q2, q3: application.q3, q4: application.q4, q5: application.q5})}}
                  multiline
                  />


                  <Typography className={classes.questions} variant = "h5" gutterBottom>
                  How do you work in a team? Would you rather work in a larger
                  or small group.</Typography>
                  <TextField className={classes.textField} id="standard-multiline-flexible"
                  onChange={(e) => {setContent({fName: application.fName, lName: application.lName, email: application.email, q1: application.q1, q2:  e.target.value, q3: application.q3, q4: application.q4, q5: application.q5})}}
                  multiline
                  />



                  <Typography className={classes.questions} variant = "h5" gutterBottom>
                  What skills do you think you could bring to this team? (These
                  skills do not have to be robotics related)</Typography>
                  <TextField className={classes.textField} id="standard-multiline-flexible"
                  onChange={(e) => {setContent({fName: application.fName, lName: application.lName, email: application.email, q1: application.q1, q2: application.q2, q3:  e.target.value, q4: application.q4, q5: application.q5})}}
                  multiline
                  />



                  <Typography className={classes.questions} variant = "h5" gutterBottom>
                  How did you hear about the UMASS Robotics team?</Typography>
                  <TextField className={classes.textField} id="standard-multiline-flexible"
                  onChange={(e) => {setContent({fName: application.fName, lName: application.lName, email: application.email, q1: application.q1, q2: application.q2, q3: application.q3, q4:  e.target.value, q5: application.q5})}}
                  multiline
                  />


                  
                  <Typography className={classes.questions} variant = "h5" gutterBottom>
                  What technologies have you used and are comfortable with?</Typography>
                  <TextField className={classes.textField} id="standard-multiline-flexible"
                  onChange={(e) => {setContent({fName: application.fName, lName: application.lName, email: application.email, q1: application.q1, q2: application.q2, q3: application.q3, q4: application.q4, q5:  e.target.value})}}
                  multiline
                  />


                  <Button className={classes.button} variant="contained" onClick={() => {submitEmail(content)}} >
                  Submit Application
                  </Button>
                 </FormControl>
              </form>
          </div>
      </div>
    </body>
  )
}

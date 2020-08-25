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
import axios from 'axios';

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
  },
  horizontalAlignment: {
    '& .MuiTextField-root': {
      width: '32%',
      marginRight: '1%',
    },
    paddingBottom: 50
  }
}));

export default function Apply() {
  const classes = useStyles();
  const [application, setApplication] = useState({firstName: '', lastName: '', email: '', major: '', expGrad: '', GorU: '', qOne: '', qTwo: '', qThree: '', qFour: '', qFive: ''})

  // Description: Function that will make post request to server with contact information to then be exported to the umassrobotics email address.
  async function submitEmail(data){
      const json = JSON.stringify(data);
      const res = await axios.post('http://127.0.0.1:5000/apply/', json, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        setSubmitted(true);
        alert('Message received. Thank you! We will try to get back to you as soon as possible.')
      }, (error) => {
        setSubmitted(false);
        alert('Message not received. Please try again later.')
      });
  }

  // Description: checks if all fields are correctly written first before sending request to email server
  function handleSubmit(application){
    if (application['fName'] && application['lName'] && application['email'] && application['major'] && application['expGrad'] && application['GorU'] && application['qOne'] && application['qTwo'] && application['qThree'] && application['qFour'] && application['qFive'] && ValidateEmail(application['email'])){
      submitEmail(application)
    }
    else {
      if(!ValidateEmail(application['email']) && application['email']){
        return alert('Please enter a valid email address')
      }
      return alert('All fields must be filled.')
    }
  }

  function ValidateEmail(mail){
    if (mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      return (true)
    }
    return (false)
  }

  function resetForm(){
    setApplication({fName: '' , lName: '', email: '', major: '', expGrad: '', GorU: '', qOne: '', qTwo: '', qThree: '', qFour: '', qFive: ''})
  }

  return (
    <body style={{margin: "0"}}>
      <div>
        <Navbar/>

          <div className={classes.root}>

              <Typography className={classes.title} variant = "h1" gutterBottom>Apply</Typography>
              <Typography className={classes.subTitle} variant = "h5" gutterBottom>
              Thank you so much for your interest in UMass Robotics! We are actively searching for new members to add to the team in all kinds of areas.
              UMass Robotics is a rigorous team of hardworking engineers dedicated towards competing and winning nation-wide competitions for robotics, machine-learning, and much more.
              Make no mistake, this team is a serious time commitment. That being said, having fun is one of our top priorities! We encourage you to apply if you believe you are up for the commitment
              and look forward to reading your application.
              <br/>
              <br/>
              Please respond to the following questions in complete sentences.
              Make sure to include any details you believe are of relevance and importance.
              (Please write about a paragraph per response)</Typography>

              <form className = {classes.form} noValidate autoComplete="off">
                 <FormControl fullWidth className={classes.margin}>

                <div className={classes.horizontalAlignment}>
                  <TextField
                    className={classes.textField}
                    id="standard-full-width"
                    label="First Name"
                    onChange={(e) => {setApplication({firstName: e.target.value, lastName: application.lastName, email: application.email, major: application.major, expGrad: application.expGrad, GorU: application.GorU, qOne:  application.qOne, qTwo: application.qTwo, qThree: application.qThree, qFour: application.qFour, qFive: application.qFive})}}
                  />
                  <TextField
                    fullWidth
                    className={classes.textField}
                    id="standard-full-width"
                    label="Last Name"
                    onChange={(e) => {setApplication({firstName: application.firstName, lastName: e.target.value, email: application.email, major: application.major, expGrad: application.expGrad, GorU: application.GorU, qOne:  application.qOne, qTwo: application.qTwo, qThree: application.qThree, qFour: application.qFour, qFive: application.qFive})}}
                  />
                  <TextField
                    fullWidth
                    className={classes.textField}
                    id="standard-full-width"
                    label="Email"
                    onChange={(e) => {setApplication({firstName: application.firstName, lastName: application.lastName, email: e.target.value, major: application.major, expGrad: application.expGrad, GorU: application.GorU, qOne:  application.qOne, qTwo: application.qTwo, qThree: application.qThree, qFour: application.qFour, qFive: application.qFive})}}
                  />
                  <TextField
                    fullWidth
                    className={classes.textField}
                    id="standard-full-width"
                    label="Current Major"
                    onChange={(e) => {setApplication({firstName: application.firstName, lastName: application.lastName, email: application.email, major: e.target.value, expGrad: application.expGrad, GorU: application.GorU, qOne:  application.qOne, qTwo: application.qTwo, qThree: application.qThree, qFour: application.qFour, qFive: application.qFive})}}
                  />
                  <TextField
                    fullWidth
                    className={classes.textField}
                    id="standard-full-width"
                    label="Expected Graduation Date"
                    onChange={(e) => {setApplication({firstName: application.firstName, lastName: application.lastName, email: application.email, major: application.major, expGrad: e.target.value, GorU: application.GorU, qOne:  application.qOne, qTwo: application.qTwo, qThree: application.qThree, qFour: application.qFour, qFive: application.qFive})}}
                  />
                  <TextField
                    fullWidth
                    className={classes.textField}
                    id="standard-full-width"
                    label="Graduate / Undergraduate"
                    onChange={(e) => {setApplication({firstName: application.firstName, lastName: application.lastName, email: application.email, major: application.major, expGrad: application.expGrad, GorU: e.target.value, qOne:  application.qOne, qTwo: application.qTwo, qThree: application.qThree, qFour: application.qFour, qFive: application.qFive})}}
                  />
                </div>

                  <Typography className={classes.questions} variant = "h5" gutterBottom>
                  Why do you want to join this team? What are some of the
                  reasons you are interested in robotics?</Typography>
                  <TextField className={classes.textField} id="outlined-multiline-static" variant="outlined" rows={15}
                  onChange={(e) => {setApplication({firstName: application.firstName, lastName: application.lastName, email: application.email, major: application.major, expGrad: application.expGrad, GorU: application.GorU, qOne:  e.target.value, qTwo: application.qTwo, qThree: application.qThree, qFour: application.qFour, qFive: application.qFive})}}
                  multiline
                  />

                  <Typography className={classes.questions} variant = "h5" gutterBottom>
                  How do you work in a team? Would you rather work in a larger
                  or small group.</Typography>
                  <TextField className={classes.textField} id="outlined-multiline-static" variant="outlined" rows={15}
                  onChange={(e) => {setApplication({firstName: application.firstName, lastName: application.lastName, email: application.email, major: application.major, expGrad: application.expGrad, GorU: e.target.value, qOne: application.qOne, qTwo:  e.target.value, qThree: application.qThree, qFour: application.qFour, qFive: application.qFive})}}
                  multiline
                  />



                  <Typography className={classes.questions} variant = "h5" gutterBottom>
                  What skills do you think you could bring to this team? (These
                  skills do not have to be robotics related)</Typography>
                  <TextField className={classes.textField} id="outlined-multiline-static" variant="outlined" rows={15}
                  onChange={(e) => {setApplication({firstName: application.firstName, lastName: application.lastName, email: application.email, major: application.major, expGrad: application.expGrad, GorU: e.target.value, qOne: application.qOne, qTwo: application.qTwo, qThree:  e.target.value, qFour: application.qFour, qFive: application.qFive})}}
                  multiline
                  />



                  <Typography className={classes.questions} variant = "h5" gutterBottom>
                  How did you hear about the UMASS Robotics team?</Typography>
                  <TextField className={classes.textField} id="outlined-multiline-static" variant="outlined" rows={15}
                  onChange={(e) => {setApplication({firstName: application.firstName, lastName: application.lastName, email: application.email, major: application.major, expGrad: application.expGrad, GorU: e.target.value, qOne: application.qOne, qTwo: application.qTwo, qThree: application.qThree, qFour:  e.target.value, qFive: application.qFive})}}
                  multiline
                  />



                  <Typography className={classes.questions} variant = "h5" gutterBottom>
                  What technologies have you used and are comfortable with?</Typography>
                  <TextField className={classes.textField} id="outlined-multiline-static" variant="outlined" rows={15}
                  onChange={(e) => {setApplication({firstName: application.firstName, lastName: application.lastName, email: application.email, major: application.major, expGrad: application.expGrad, GorU: e.target.value, qOne: application.qOne, qTwo: application.qTwo, qThree: application.qThree, qFour: application.qFour, qFive:  e.target.value})}}
                  multiline
                  />


                  <Button className={classes.button} variant="contained" onClick={() => {handleSubmit(application)}} >
                  Submit Application
                  </Button>
                 </FormControl>
              </form>
          </div>
      </div>
    </body>
  )
}

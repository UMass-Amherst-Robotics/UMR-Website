import React, { useState } from 'react';
import Navbar from './../Components/navbar.js'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../Components/Footer/footer.js'
import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple';
import axios from 'axios';

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
  badButton:{
    marginLeft: '42%',
    marginBottom: 50,
    padding: 15,
    backgroundColor: '#50e78e',
    color: '#303030',
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
  const [submitted, setSubmitted] = useState(null);
  const [content, setContent] = useState({firstName: '', lastName: '', email: '', subject: '', message: ''})

  // Description: Function that will make post request to server with contact information to then be exported to the umassrobotics email address.
  function submitEmail(data){
      const json = JSON.stringify(data);
      const res = axios.post('http://127.0.0.1:5000/contact/', json, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      }).then((repsonse) => {
        setSubmitted(true);
        alert('Message received. Thank you! We will try to get back to you as soon as possible.')
      }, (error) => {
        setSubmitted(false);
        alert('Message not received. Please try again later.')
      })
  }

  function resetForm(){
    setContent({firstName: '', lastName: '', email: '',subject:'', message: ''})
  }

  // Description: checks if all fields are correctly written first before sending request to email server
  function handleSubmit(content){
    if (content['firstName'] && content['lastName'] && content['email'] && content['subject'] && content['message'] && ValidateEmail(content['email'])){
      submitEmail(content)
    }
    else {
      if(!ValidateEmail(content['email']) && content['email']){
        return alert('Please enter a valid email adress you fucking dumbass')
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

  return (
    <body style={{margin: "0"}}>
      <div>
        <Navbar/>
          <div className={classes.root}>
            <Typography className={classes.title} variant = "h1" gutterBottom>Contact</Typography>
            <form noValidate autoComplete="off">
              <div className={classes.margin}>
                <TextField
                  className={classes.textField}
                  id="standard-full-width"
                  label="First Name"
                  onChange={(e) => {setContent({firstName: e.target.value, lastName: content.lastName, email: content.email, subject: content.subject, message: content.message})}}
                />
                <TextField
                  fullWidth
                  className={classes.textField}
                  id="standard-full-width"
                  label="Last Name"
                  onChange={(e) => {setContent({firstName: content.firstName, lastName: e.target.value, email: content.email, subject: content.subject, message: content.message})}}
                />
              </div>
              <TextField
                id="standard-full-width"
                className={classes.textField}
                label="Email"
                fullWidth
                color='green'
                onChange={(e) => {setContent({firstName: content.firstName, lastName: content.lastName, email: e.target.value, subject: content.subject, message: content.message})}}
              />
              <TextField
                id="standard-full-width"
                className={classes.textField}
                label="Subject"
                fullWidth
                onChange={(e) => {setContent({firstName: content.firstName, lastName: content.lastName, email: content.email, subject: e.target.value, message: content.message})}}
              />
              <TextField
                id="standard-full-width"
                className={classes.textField}
                label="Message"
                fullWidth
                onChange={(e) => {setContent({firstName: content.firstName, lastName: content.lastName, email: content.email, subject: content.subject, message: e.target.value})}}
              />
            </form>
            <Button className={submitted ? classes.badButton : classes.button} variant="contained" onClick={() => {handleSubmit(content)}}>
              Submit
            </Button>
          </div>
        <Footer />
      </div>
    </body>
  )
}

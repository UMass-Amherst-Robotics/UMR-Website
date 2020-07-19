import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
    padding: '40px'
  },
  title:{
    fontWeight: 'bold',
    paddingBottom: '30px'

  },
  button:{
    backgroundColor: '#312927',
    color: '#FFFFFF',
  },
});


export default function Introduction() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Typography className={classes.title} variant = "h3" gutterBottom>
      Welcome to UMass Robotics!
    </Typography>
    <Typography variant = 'body1' gutterBottom>
      Looking for a fun and dynamic place to develop your engineering skills
      outside of the classroom? Look no further, because UMass Robotics is the
      perfect place for you! UMass Robotics is a student-run organization that
      gives members the opportunity to dive deep into the cutting-edge field of
      robotics. Members will gain experience in computer programming,
      electronics, and hardware design. Each year, our team works to build a
      robot that will compete in an annual competition. This year, the the team
      will compete in the NASA Lunabotics competition by building a mining robot
      capable of digging through sand and gathering "precious material," similar
      to what a robot might do on Mars. Our team is highly committed, and every
      member is guaranteed to learn valuable skills that can be applied in a
      workplace environment. UMass Robotics is an amazing place for students of
      all experience levels, and we hope to see you on the team!
    </Typography>
    <Button className={classes.button} variant='contained'>
    About Us
    </Button>
    </div>
  )
}

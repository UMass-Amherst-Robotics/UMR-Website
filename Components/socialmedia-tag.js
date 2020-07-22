import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  Text: {
    position: 'relative',
    backgroundColor: 'transparent',
    color:'#737373',
    fontFamily: 'Arial',
    fontWeight: 'Bold',
    fontSize: 15,
  },
  Icon: {
    fontSize: 40,
    color:'#737373',
  }
});


export default function CopyrightTag(){
  const classes = useStyles();
  return(
    <div
      id='social media tag'
      className={classes.Text}
    >
      FOLLOW US ON SOCIAL MEDIA
      <Grid
        container
        direction='row'
        justify= 'space-evenly'
        alignItems= 'center'
      >
        <InstagramIcon  className={classes.Icon} href='https://www.instagram.com/umassrobotics/'/>
        <YouTubeIcon className={classes.Icon} href='https://www.youtube.com/channel/UCpH514vygzjNv3PWWZNuKuA' />
        <GitHubIcon  className={classes.Icon} href='https://github.com/UMass-Amherst-Robotics'/>
      </Grid>
    </div>
  )
}

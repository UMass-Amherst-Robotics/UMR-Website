import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    root: {
      position: 'relative',
      height: "700px",
      background: "#9A1E1E",
    },
    title: {
      fontWeight: 'bold',
      padding: '40px',
      color: '#FFFFFF'
    },
    container: {
      position: 'absolute',
    },
    leftFlyoutCard: {
      position: 'absolute',
      left: '50px',
      width: '45%',
      height: '35%',
      borderRadius: 30,
    },
    rightFlyoutCard: {
      position: 'absolute',
      right: '50px',
      width: '45%',
      height: '35%',
      borderRadius: 30,
    },
  }));

const QuickFacts = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant = "h3" gutterBottom>
        Quick Facts
      </Typography>
      <Grid nowrap spacing={3}>
        <Grid container spacing={3}>
          <Grid>
            <Paper elevation={0} className={classes.leftFlyoutCard}></Paper>
          </Grid>
          <Grid>
            <Paper elevation={0} className={classes.rightFlyoutCard}></Paper>
          </Grid>
        </Grid>
        <Grid column spacing={3}>
          <Grid>
            <Paper elevation={0} className={classes.leftFlyoutCard}></Paper>
          </Grid>
          <Grid>
            <Paper elevation={0} className={classes.rightFlyoutCard}></Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default QuickFacts;

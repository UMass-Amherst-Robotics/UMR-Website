import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      height: "1000px",
      background: "#9A1E1E",
    },
    title: {
      fontWeight: 'bold',
      padding: '40px',
      color: '#FFFFFF'
    },
    flyoutCard: {
      padding: theme.spacing(20),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(10),
      borderRadius: theme.spacing(10),
    },
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
    },
  }));

const QuickFacts = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant = "h3" gutterBottom>
        Quick Facts
      </Typography>
      <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          spacing={3}
      >
        <Grid item xs={5}>
          <Paper elevation={0} className={classes.flyoutCard}></Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper elevation={0} className={classes.flyoutCard}></Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper elevation={0} className={classes.flyoutCard}></Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper elevation={0} className={classes.flyoutCard}></Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default QuickFacts;

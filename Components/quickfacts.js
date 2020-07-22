import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
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
    flyoutCard: {
      position: 'absolute',
      left: '-2px',
      width: '45%',
      height: '35%'
    }
  }));

const QuickFacts = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant = "h3" gutterBottom>
        Quick Facts
      </Typography>
      <Card className={classes.flyoutCard}> Text </Card>
    </div>
  )
}

export default QuickFacts;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    flyoutTile: {
      padding: theme.spacing(10),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(10),
      borderRadius: theme.spacing(10),
    },
    title:{
        fontWeight: 'bold',
        fontSize: 130,
        textAlign: 'left',
        color: '#9A1E1E'
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#9A1E1E'
    },
    logo: {
        maxWidth: 175,
    },
  }));

const QuickFactTile = (props) => {
    const classes = useStyles();

    return (
        <Paper elevation={0} className={classes.flyoutTile}>
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                spacing={5}
            >
                <Grid item>
                    <Typography variant = 'h1' className={classes.title}>
                     {props.title}
                    </Typography>
                    <Typography variant = 'h4' className={classes.text}>
                     {props.text}
                    </Typography>
                </Grid>
                <Grid item>
                    <img src={props.img} alt="logo" className={classes.logo} href='/' />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default QuickFactTile;

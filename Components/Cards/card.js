import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff7961',
      main: '#1565c0',
      dark: '#ba000d',
      contrastText: '#000',
    },
    secondary: {
      light: '#ff7961',
      main: '#212121',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 575,
      md: 600,
      lg: 825,
      xl: 905
    }
  }
});

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  imageHeight: {
    height: 300,
    [theme.breakpoints.down('xs')]: {
      height: 400,
    },
  },
  bodyHeight: {
    [theme.breakpoints.up('sm')]: {
      height: 240,
    },
    [theme.breakpoints.up('md')]: {
      height: 210,
    },
    [theme.breakpoints.up('lg')]: {
      height: 260,
    },
    [theme.breakpoints.up('xl')]: {
      height: 210,
    },
    
    /*
    [theme.breakpoints.down('md')]: {
      height: 260,
    },
    [theme.breakpoints.up('md')]: {
      height: 210,
    },
    [theme.breakpoints.down('xs')]: {
      height: 150,
    }
    */
  },
});

const styles = {
  button: {
    width: 64,
    padding: 0,
  },
  icon: {
    fontSize: 50,
  },
};

export default function MediaCard(props) {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
    <Card style={{backgroundColor: "#ffffff"}}>
      <CardActionArea>
        <CardMedia
          className={classes.imageHeight}
          image={props.image}
          title="Card"
        />
        <CardContent className={classes.bodyHeight}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>

          <Typography gutterBottom variant="body2" component="h2">
            <b>{props.execRole}</b>
          </Typography>

          <Typography variant="body2" color="textPrimary" component="p">
            <b>Major:</b> {props.major}<br></br>
            <b>What I Work On:</b> {props.work}<br></br>
            <b>Hobbies:</b> {props.hobbies}<br></br>
            <b>Favorite Dining Hall:</b> {props.diningHall}<br></br>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box mx="auto">
          <IconButton color="primary">
            <LinkedInIcon style={styles.icon}/>
          </IconButton>
          <IconButton>
            <GitHubIcon color="secondary" style={styles.icon}/>
          </IconButton>
        </Box>
      </CardActions>
    </Card>
    </MuiThemeProvider>
  );
}
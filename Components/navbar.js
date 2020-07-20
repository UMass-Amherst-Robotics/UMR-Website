import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import StyledButton from './styledbutton.js'
import Toolbar from '@material-ui/core/Toolbar'

const useStyles = makeStyles((theme) => ({
    root: {
      position: 'relative',
      height: "550px",
      background: "#2C2C2C",
    },
    menubar: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
    },
    divider: {
        height: "10px",
        background: "#9A1E1E"
    },
    logo: {
        maxWidth: 60,
        padding: "20px 20px 20px 0"
    },
    menu_button: {
        fontWeight: 'bold',
    },
    special_button: {
        borderRadius: "1em",
        backgroundColor: '#FFFFFF',
        bottom: '20px',
        right: '20px',
        position: 'absolute',
        color: '#9A1E1E',
        fontWeight: 'bold',
        height: '50px',
        width: '150px'
    },
  }));

const Navbar = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.root}>
                <AppBar elevation={0} position="fixed" className={classes.menubar}>
                    <Toolbar>
                            <img src="/umr-logo-white.png" alt="logo" className={classes.logo} />
                            <Button className={classes.menu_button} color="inherit">HOME</Button>
                            <Button className={classes.menu_button} color="inherit">ABOUT</Button>
                            <Button className={classes.menu_button} color="inherit">CONTACT</Button>
                            <Button className={classes.menu_button} color="inherit">SPONSORS</Button>
                    </Toolbar>
                </AppBar>
                <StyledButton title="Cool Title" className={classes.special_button}>View Photos</StyledButton>
            </div>
            <div className={classes.divider}></div>
        </div>
    );
}

export default Navbar;

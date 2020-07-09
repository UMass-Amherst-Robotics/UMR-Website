import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'

const useStyles = makeStyles((theme) => ({
    root: {
      height: "550px",
      background: "#2C2C2C"
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
  }));

const Navbar = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.root}>
                <AppBar elevation={0} position="fixed" className={classes.menubar}>
                    <Toolbar>
                            <img src="/umr-logo-white.png" alt="logo" className={classes.logo} />
                            <Button color="inherit">HOME</Button>
                            <Button color="inherit">ABOUT</Button>
                            <Button color="inherit">CONTACT</Button>
                            <Button color="inherit">SPONSORS</Button>
                    </Toolbar>
                </AppBar>
            </div>
            <div className={classes.divider}></div>
        </div>
    );
}

export default Navbar;

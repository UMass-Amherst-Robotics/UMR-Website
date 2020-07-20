import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Link from 'next/link'
const useStyles = makeStyles((theme) => ({
	root: {
		position: 'relative',
    height: "80px",
    background: "#2C2C2C"
  },
  menubar: {
    backgroundColor: '#2C2C2C',
    boxShadow: 'none',
  },
  divider: {
    height: "10px",
    background: "#9A1E1E"
  },
  logo: {
    maxWidth: 70,
    padding: "20px 20px 20px 0"
  },
  menu_button: {
    color: 'white',
    fontWeight: 'bold',
		fontSize: 15,
		height: 60,
		width: 170
	}
}));

const Navbar = () => {
  const classes = useStyles();

  return (
  	<div>
    	<div className={classes.root}>
      	<AppBar elevation={0} className={classes.menubar}>
        	<Toolbar>
						<a href='/'><img src="/umr-logo-white.png" alt="logo" className={classes.logo} href='/' /></a>
							<Button className={classes.menu_button} color="inherit" href='/'>HOME</Button>
							<Button className={classes.menu_button} color="inherit" href='/about-us'>ABOUT US</Button>
							<Button className={classes.menu_button} color="inherit" href='/contact'>CONTACT</Button>
							<Link href='/sponsors'><Button className={classes.menu_button} color="inherit">SPONSORS</Button></Link>
							<Button className={classes.menu_button} colot="inhereit" href='https://www.gofundme.com/f/umass-robotics?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1'>DONATE</Button>
          </Toolbar>
				</AppBar>
			</div>
		</div>
  );
}

export default Navbar;

import React from 'react';
import Navbar from './../Components/navbar.js'
import Footer from '../Components/Footer/footer.js'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import CorporateSponsors from '../Components/sponsors/corporatesponsors.js'
import GoldDonators from '../Components/sponsors/golddonators.js'
import SilverDonators from '../Components/sponsors/silverdonators.js'

const useStyles = makeStyles({
  root: {
    maxWidth: 1280,
    width: "90%"
  },
  introduction: {
    fontWeight: 'bold',
    fontSize: '2rem',
    paddingTop: '30px',
    paddingLeft: '30px'
  },
});

export default function Sponsors() {
  const classes = useStyles();
  return (
      <body style={{margin: 0, width:'100%', backgroundColor: "#f5f5f5"}}>
      <Navbar />
      <Box mx='auto' className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12} align='center'>
            <Typography className={classes.introduction}>
              Thank you to our supporters and sponsors!
            </Typography>
          </Grid>

          <Grid item xs={12}><hr/></Grid>
          <Grid item xs={12} align='center'>
            <CorporateSponsors/>
          </Grid>
          <Grid item xs={12}><hr/></Grid>
          <Grid item xs={6} align='center'>
            <GoldDonators/>
          </Grid>
          <Grid item xs={6} align='center'>
            <SilverDonators/>
          </Grid>
        </Grid>
      </Box>
      <Footer/>
    </body>
  )
}

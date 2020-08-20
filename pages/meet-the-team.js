import React from 'react';
import Navbar from './../Components/navbar.js'
import Body from './../Components/home/body.js'
import MediaCard from '/Users/mbrauninger/Desktop/MyGithub/UMRWebsite/UMR-Website/Components/Cards/card.js'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import { MuiThemeProvider} from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    maxWidth: 850,
    width: "80%"
  }
});

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
      md: 825,
      lg: 900,
      xl: 1200
    }
  }
});

let execs = [
  {name: "Sam Dubois", image: "/Profiles/SamPicture.png", execRole: "President", major: "Computer Science and Engineering", work: "Electronics, programming", hobbies: "Rock climbing, machining", diningHall: "Berk"},
  {name: "Sean Flanagan", image: "/Profiles/SeanFlanPicture.png", execRole: "Vice-President", major: "Mechanical Engineering", work: "Mechanical design, analysis", hobbies: "Spikeball, volleyball, table tennis", diningHall: "Hamp"},
  {name: "Dom Locurto", image: "/Profiles/DomPicture.png", execRole: "Treasurer", major: "Mechanical Engineering", work: "Mechanical design, analysis", hobbies: "Ultimate frisbee, cooking, gaming", diningHall: "Hamp"},
  {name: "Alex Klinkhamer", image: "/Profiles/AlexPicture.png", execRole: "Secretary", major: "Mechanical Engineering", work: "Mechanical design, analysis", hobbies: "3D printing, designing, CAD, running", diningHall: "Worcester"},
  {name: "Jagath Jai Kumar", image: "/Profiles/JagathPicture.png", execRole: "Cyber Forensics Research Fellow", major: "Computer Science Graduate", work: "Advising and mentorship", hobbies: "Rock climbing, 3D printing", diningHall: "Berk"}

]

let members = [
    {name: "Mike Brauninger", image: "/Profiles/MikePicture.png", major: "Computer Engineering", work: "Electronics, programming, website design", hobbies: "Frisbee, guitar, fishing", diningHall: "Berk"},
    {name: "Andrew Tran", image: "/Profiles/AndrewPicture.png", major: "Computer Engineering", work: "Electronics, programming, website design", hobbies: "Cooking, personal coding projects", diningHall: "Worcester"},
    {name: "Aidan Downey", image: "/Profiles/AidanPicture.png", major: "Mechanical Engineering", work: "Mechanical design, analysis", hobbies: "Sailing, guitar, gain time", diningHall: "Berk"},
    {name: "Kyle O'Connell", image: "/Profiles/KylePicture.png", major: "Mechanical Engineering", work: "Mechanical design, analysis", hobbies: "Frisbee, music", diningHall: "Hamp"},
    {name: "Anna St. George", image: "/Profiles/AnnaPicture.png", major: "Psychology", work: "Front-end design, programming", hobbies: "Frisbee", diningHall: "Hamp"},
    {name: "Andy Gutierrez", image: "/Profiles/GutiPic.png", major: "Computer Engineering", work: "Electronics, programming, website design", hobbies: "Piano, guitar, squash", diningHall: "Berk"}
    ]

export default function Team() {
  const classes = useStyles()
  const spacing = 5
  const xSmall = 12
  const small = 6
  const medium = 4
  return (
    <body style={{backgroundColor: "#ffffff"}}>
      <MuiThemeProvider theme={theme}>
        <Navbar/>
          <Box mx="auto" className={classes.root} mt={4}>
            <Box mb={4}>
              <Typography variant="h2">
                Executive Board
              </Typography>
            </Box>
          <Grid container spacing={spacing}>
            {execs.map((person) => (
            <Grid item xs={xSmall} sm={small} md={medium}>
                <MediaCard name={person.name} image={person.image} execRole={person.execRole} major={person.major} work={person.work} hobbies={person.hobbies} diningHall={person.diningHall}/>
            </Grid>))}
          </Grid>
          <Box mt={10}>
          <Typography variant="h1">
             <hr></hr>
          </Typography>
          </Box>
          <Box mb={4}>
            <Typography variant="h2">
              Team
            </Typography>
          </Box>
          <Grid container spacing={spacing}>
            {members.map((person) => (
            <Grid item xs={xSmall} sm={small} md={medium}>
                <MediaCard name={person.name} image={person.image} major={person.major} work={person.work} hobbies={person.hobbies} diningHall={person.diningHall}/>
            </Grid>))}
          </Grid>
        </Box>
      </MuiThemeProvider>
    </body>
  )
}
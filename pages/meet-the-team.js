import React from 'react';
import Navbar from './../Components/navbar.js'
import Body from './../Components/home/body.js'
import MediaCard from './../Components/Cards/card.js'
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
import Footer from '../Components/Footer/footer.js'
import { positions } from '@material-ui/system';

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
  {name: "Sam Dubois", image: "/Profiles/SamPicture.png", execRole: "President", major: "C.S. and Computer Engineering", work: "Electronics, programming", hobbies: "Rock climbing, machining", diningHall: "Berk", linkedIn: "https://www.linkedin.com/in/samuel-dubois/", gitHub: "https://github.com/sdubois18"},
  {name: "Sean Flanagan", image: "/Profiles/SeanFlanPicture.png", execRole: "Vice-President", major: "Mechanical Engineering", work: "Mechanical design, analysis", hobbies: "Spikeball, volleyball, table tennis", diningHall: "Hamp", linkedIn: "https://www.linkedin.com/in/sean-flanagan-997480157/", gitHub: "https://github.com/smflanagan"},
  {name: "Dom Locurto", image: "/Profiles/DomPicture.png", execRole: "Treasurer", major: "Mechanical Engineering", work: "Mechanical design, analysis", hobbies: "Ultimate frisbee, cooking, gaming", diningHall: "Hamp", linkedIn: "http://linkedin.com/in/dominic-locurto-888103194", gitHub: "https://github.com/DomLocurto"},
  {name: "Alex Klinkhamer", image: "/Profiles/AlexPicture.png", execRole: "Secretary", major: "Mechanical Engineering", work: "Mechanical design, analysis", hobbies: "3D printing, designing, CAD, running", diningHall: "Worcester", gitHub: "https://github.com/Aklinkhamer"},
  {name: "Jagath Jai Kumar", image: "/Profiles/JagathPicture.png", execRole: "Cyber Forensics Research Fellow", major: "C.S. Graduate", work: "General advising and mentorship", hobbies: "Rock climbing, 3D printing", diningHall: "Berk", linkedIn: "https://www.linkedin.com/in/jagath-jai-kumar/", gitHub: "https://github.com/jagath-jaikumar"},
  {name: "Adam Rivelli", image: "/Profiles/AdamPicture.png", execRole: "C.S. Master's Student", major: "C.S. and Mechanical Engineering Graduate", work: "Mechanical engineering mentorship", hobbies: "Rock climbing, running, hiking", diningHall: "Worcester", linkedIn: "https://www.linkedin.com/in/adam-rivelli", gitHub: "https://github.com/AdamRivelli"}


]

let members = [
    {name: "Mike Brauninger", image: "/Profiles/MikePic.png", major: "Computer Engineering", work: "Electronics, programming, website design", hobbies: "Frisbee, guitar, fishing", diningHall: "Berk", linkedIn: "https://www.linkedin.com/in/mbrauninger/", gitHub: "https://github.com/mbrauninger"},
    {name: "Andrew Tran", image: "/Profiles/AndrewPicture.png", major: "Computer Engineering", work: "Electronics, programming, website design", hobbies: "Cooking, personal coding projects", diningHall: "Worcester", linkedIn: "https://www.linkedin.com/in/umass-andrew-tran/", gitHub: "https://github.com/andrewtran10"},
    {name: "Aidan Downey", image: "/Profiles/AidanPicture.png", major: "Mechanical Engineering", work: "Mechanical design, analysis", hobbies: "Sailing, guitar, gain time", diningHall: "Berk", gitHub: "https://github.com/apdowney"},
    {name: "Kyle O'Connell", image: "/Profiles/KylePicture.png", major: "Mechanical Engineering", work: "Mechanical design, analysis", hobbies: "Frisbee, music", diningHall: "Hamp", linkedIn: "https://www.linkedin.com/in/kyle-o-connell-763273175/", gitHub: "https://github.com/kyleo9918"},
    {name: "Andy Gutierrez", image: "/Profiles/GutiPic.png", major: "Computer Engineering", work: "Electronics, programming, website design", hobbies: "Piano, guitar, squash", diningHall: "Berk", linkedIn: "https://www.linkedin.com/in/andres-gutierrez-8758581a2/", gitHub: "https://github.com/Andy-Guti"},
    {name: "Dillan Wilson", image: "/Profiles/DillanPicture.png", major: "Mechanical Engineering", work: "Chassis design", hobbies: "Running, hockey, table tennis", diningHall: "Hamp", linkedIn: "https://www.linkedin.com/in/dillan-wilson-2a2116175/", gitHub: "https://github.com/dillan-wilson"}
    ]

export default function Team() {
  const classes = useStyles()
  const spacing = 5
  const xSmall = 12
  const small = 6
  const medium = 4
  return (
    <body style={{backgroundColor: "#ffffff", margin: 0}}>
      <MuiThemeProvider theme={theme}>
        <Navbar/>
          <Box mx="auto" mb={5} className={classes.root} mt={4}>
            <Box mb={4}>
              <Typography variant="h3">
               <b> Executive Board</b>
              </Typography>
            </Box>
          <Grid container spacing={spacing}>
            {execs.map((person) => (
            <Grid item xs={xSmall} sm={small} md={medium}>
                <MediaCard name={person.name} image={person.image} execRole={person.execRole} major={person.major} work={person.work} hobbies={person.hobbies} diningHall={person.diningHall} linkedIn={person.linkedIn} gitHub={person.gitHub}/>
            </Grid>))}
          </Grid>
          <Box mt={8}>
          <Typography variant="h3">
             <hr></hr>
          </Typography>
          </Box>
          <Box mt={5} mb={4}>
            <Typography variant="h3">
              <b>Team</b>
            </Typography>
          </Box>
          <Grid container spacing={spacing}>
            {members.map((person) => (
            <Grid item xs={xSmall} sm={small} md={medium}>
                <MediaCard name={person.name} image={person.image} major={person.major} work={person.work} hobbies={person.hobbies} diningHall={person.diningHall} linkedIn={person.linkedIn} gitHub={person.gitHub}/>
            </Grid>))}
          </Grid>
        </Box>
        <Footer />
      </MuiThemeProvider>
    </body>
  )
}
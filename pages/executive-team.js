import React from 'react';
import Navbar from './../Components/navbar.js'
import Body from './../Components/home/body.js'
import MediaCard from './../Components/Cards/card.js'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider} from '@material-ui/core/styles';
import Footer from '../Components/Footer/footer.js'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CardIcon from './../Components/cardIcon.js'

const useStyles = makeStyles({
  root: {
    maxWidth: 850,
    width: "80%"
  },
  header: {
    color: "#9A1E1E"
  },
  icon: {
    fontSize: 50,
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

export default function Team() {
  const classes = useStyles()
  const spacing = 5
  const xSmall = 12
  const small = 6
  const medium = 4

  const linkedInIcon =  <LinkedInIcon className={classes.icon}></LinkedInIcon> 
  const gitHubIcon =   <GitHubIcon color="secondary" className={classes.icon}/>
  
  function icon(link, icon) {
    return <CardIcon link={link} icon={icon} />
  }

  function Work(props) {
    return <div><b>What I Work On:</b> {props.work}<br></br></div>
  }

  let execs = [
    {name: "Sam Dubois", image: "/Profiles/SamPicture.png", execRole: "President", major: "C.S. and Computer Engineering", work: <Work work="Electronics, programming" />, hobbies: "Rock climbing, machining", diningHall: "Berk", linkedInIcon: icon("https://www.linkedin.com/in/samuel-dubois/", linkedInIcon), gitHubIcon: icon('https://github.com/sdubois18', gitHubIcon)},
    {name: "Sean Flanagan", image: "/Profiles/SeanFlanPicture.png", execRole: "Vice-President", major: "Mechanical Engineering", work: <Work work="Mechanical design, analysis" />, hobbies: "Spikeball, volleyball, table tennis", diningHall: "Hamp", linkedInIcon: icon("https://www.linkedin.com/in/sean-flanagan-997480157/", linkedInIcon), gitHubIcon: icon("https://github.com/smflanagan", gitHubIcon)},
    {name: "Dom Locurto", image: "/Profiles/DomPicture.png", execRole: "Treasurer", major: "Mechanical Engineering", work: <Work work="Mechanical design, analysis" />, hobbies: "Ultimate frisbee, cooking, gaming", diningHall: "Hamp", linkedInIcon: icon("http://linkedin.com/in/dominic-locurto-888103194", linkedInIcon), gitHubIcon: icon("https://github.com/DomLocurto", gitHubIcon)},
    {name: "Alex Klinkhamer", image: "/Profiles/AlexPicture.png", execRole: "Secretary", major: "Mechanical Engineering", work: <Work work="Mechanical design, analysis" />, hobbies: "3D printing, designing, CAD, running", diningHall: "Worcester", linkedInIcon: icon("https://www.linkedin.com/in/alexander-klinkhamer-91006819a/", linkedInIcon), gitHubIcon: icon("https://github.com/Aklinkhamer", gitHubIcon)},
    {name: "Chloe Xie", image: "/Profiles/ChloePicture.png", execRole: "Head of Public Outreach", major: "Computer Science", hobbies: "Cooking, gaming, lifting", diningHall: "Worcester", linkedInIcon: icon("https://www.linkedin.com/in/chloe-x-15792716a/", linkedInIcon), gitHubIcon: icon("https://github.com/cxie00", gitHubIcon)},
    {name: "Emma Thompson", image: "/Profiles/EmmaPic.png", execRole: "Social Media Correspondant", major: "Journalism and Biology", hobbies: "Writing, running, drinking coffee", diningHall: "Berk", linkedInIcon: icon("https://www.linkedin.com/in/emma-thompson-5b51b5176", linkedInIcon)},
    {name: "Jagath Jai Kumar", image: "/Profiles/JagathPicture.png", execRole: "Cyber Forensics Research Fellow", major: "C.S. Graduate", work: <Work work="General advising and mentorship" />, hobbies: "Rock climbing, 3D printing", diningHall: "Berk", linkedInIcon: icon("https://www.linkedin.com/in/jagath-jai-kumar/", linkedInIcon), gitHubIcon: icon("https://github.com/jagath-jaikumar", gitHubIcon)},
    {name: "Adam Rivelli", image: "/Profiles/AdamPicture.png", execRole: "C.S. Master's Student", major: "C.S. and Mechanical Engineering Graduate", work: <Work work="Mechanical engineering mentorship" />, hobbies: "Rock climbing, running, hiking", diningHall: "Worcester", linkedInIcon: icon("https://www.linkedin.com/in/adam-rivelli", linkedInIcon), gitHubIcon: icon("https://github.com/AdamRivelli", gitHubIcon)}
  ]

  return (
    <body style={{backgroundColor: "#ffffff", margin: 0}}>
      <MuiThemeProvider theme={theme}>
        <Navbar/>
          <Box mx="auto" mb={5} className={classes.root} mt={4}>
            <Box mb={4}>
              <Typography variant="h3" className={classes.header}>
               <b> Executive Board</b>
              </Typography>
            </Box>
          <Grid container spacing={spacing}>
            {execs.map((person) => (
            <Grid item xs={xSmall} sm={small} md={medium}>
                <MediaCard name={person.name} image={person.image} execRole={person.execRole} major={person.major} work={person.work} hobbies={person.hobbies} diningHall={person.diningHall} linkedInIcon={person.linkedInIcon} gitHubIcon={person.gitHubIcon}/>
            </Grid>))}
          </Grid>
        </Box>
        <Footer />
      </MuiThemeProvider>
    </body>
  )
}
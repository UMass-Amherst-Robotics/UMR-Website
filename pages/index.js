import Head from 'next/head'

import Navbar from './../Components/navbar.js'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

export default function Home() {
  return (
    <body style={{margin: "0"}}>
        <Navbar/>
    </body>
  )
}

import Head from 'next/head'
import React from 'react';
import Navbar from './../Components/navbar.js'
import Body from './../Components/body.js'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

export default function Home() {
  return (
    <body style={{margin: "0"}}>
      <div>
        <Navbar/>
        <Body />
      </div>
    </body>
  )
}

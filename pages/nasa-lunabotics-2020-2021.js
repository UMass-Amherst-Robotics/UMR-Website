import React from 'react';
import Navbar from './../Components/navbar.js'
import Body from './../Components/body.js'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

export default function Contact() {
  return (
    <body style={{margin: "0"}}>
      <div>
        <Navbar/>
			     <h1> Comp info </h1>
      </div>
    </body>
  )
}

import React from 'react';
import Navbar from './../Components/navbar.js'
import Body from './../Components/body.js'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

export default function Sponsors() {
  return (
    <body style={{margin: "0"}}>
      <div>
        <Navbar/>
				<h1> Sponsors </h1>
      </div>
    </body>
  )
}

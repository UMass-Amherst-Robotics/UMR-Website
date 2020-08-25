import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import axios from 'axios';

export default function SilverDonators() {
  const xs = 12;
  const sm = 6;

  const [silvers, setSilvers] = useState([])

  axios.get('http://127.0.0.1:5000/donators/').then(
      (res) => {
        let list = res.data['silver']
        setSilvers(list)
      }
    )

  return (
    <div className='silver-container'>
      <Grid container direction='row'>
        <Grid item xs={xs} sm={sm}>
          <img src='./Silver.png' alt='silver sponsor'/>
        </Grid>
        <Grid item xs={xs} sm={sm}>
          <Typography variant='h5'>SILVER DONATORS</Typography>
            {
              silvers.map((sponsor, index)=>{
                return <p>{sponsor}</p>
              })
            }
        </Grid>
      </Grid>
    </div>
  )
}

import React from 'react';
import silvers from'./data/silver_donators.json'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

export default function SilverDonators() {
  return (
    <div className='silver-container'>
      <Grid container direction='row'>
        <Grid item xs={6}>
          <img src='./Silver.png' alt='gold sponsor'/>
        </Grid>
        <Grid item xs={6}>
          <ul>
          <Typography variant='h5'>SILVER DONATORS</Typography>
            {
              silvers.map((sponsor, index)=>{
                return <p>{sponsor}</p>
              })
            }
          </ul>
        </Grid>
      </Grid>
    </div>
  )
}

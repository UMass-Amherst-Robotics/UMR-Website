import React from 'react';
import golds from './data/gold_donators.json'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

export default function GoldSponsors() {
  return (
    <div className='gold-container'>
      <Grid container direction='row'>
        <Grid item xs={6}>
          <img src='./Gold.png' alt='gold sponsor'/>
        </Grid>
        <Grid item xs={6}>
          <ul>
          <Typography variant='h5'>GOLD DONATORS</Typography>
            {
              golds.map((sponsor, index)=>{
                return <p>{sponsor}</p>
              })
            }
          </ul>
        </Grid>
      </Grid>
    </div>
  )
}

import React from 'react';
import golds from './data/gold_donators.json'
import Typography from '@material-ui/core/Typography'


export default function GoldSponsors() {
  return (
    <div className='gold-container'>
        <ul>
        <Typography variant='h5'>GOLD DONATORS</Typography>
          {
              golds.map((sponsor, index)=>{
                return <p>{sponsor}</p>
              })
          }
        </ul>
    </div>
  )
}

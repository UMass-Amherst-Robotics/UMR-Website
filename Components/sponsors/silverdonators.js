import React from 'react';
import silvers from'./data/silver_donators.json'
import Typography from '@material-ui/core/Typography'


export default function SilverDonators() {
  return (
    <div className='silver-container'>
        <ul>
        <Typography variant='h5'>SILVER DONATORS</Typography>
        {
            silvers.map((sponsor, index)=>{
              return <p>{sponsor}</p>
            })
        }
        </ul>
    </div>
  )
}

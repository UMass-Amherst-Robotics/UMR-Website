import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Box'
import axios from 'axios';

export default function GoldSponsors() {
  const xs = 12;
  const sm = 6;

  const [golds, setGolds] = useState([])

  axios.get('http://127.0.0.1:5000/donators/').then(
      (res) => {
        let list = res.data['gold']
        setGolds(list)
      }
    )

  return (
    <div className='gold-container'>
      <Grid container>
        <Grid item xs={xs} sm={sm}>
          <img src='./Gold.png' alt='gold sponsor'/>
        </Grid>
        <Grid item xs={xs} sm={sm}>
          <Typography variant='h5'>GOLD DONATORS</Typography>
            {
              golds.map((sponsor, index)=>{
                return <p>{sponsor}</p>
              })
            }
        </Grid>
      </Grid>
    </div>
  )
}
